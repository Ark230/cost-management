import { useEffect, useState } from "react";
import { ExpensesSharingService } from "@/app/utils/subject-instances";
import Modal from "antd/es/modal/Modal";
import ExpenseFormTwo from "../ExpenseFormTwo/ExpenseFormTwo";
import { Expense } from "@/domain/entities/Expense";
import { RootState } from "@/application/config/redux/rootReducer";
import { useSelector } from "react-redux";
import { ExpenseManagement } from "@/domain/entities/redux/expense";

interface FormModal {
  title: string;
  okText: string;
}

const FormModal = ({ title, okText }: FormModal) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentExpense, setCurrentExpense] = useState<Expense | null>(null);
  const [currentManagement, setCurrentManagement] =
    useState<ExpenseManagement | null>(null);
  const [managementProcess, setManagementProcess] = useState("");

  const expenseManagements = useSelector(
    (store: RootState) => store.expenses.expenseManagements
  );

  useEffect(() => {
    const subscription = ExpensesSharingService.getSubject().subscribe(
      (incomingData: any) => {
        const hasProperty = (prop: string): boolean =>
          incomingData.hasOwnProperty(prop);

        if (hasProperty("updateExpense")) {
          setCurrentExpense(incomingData.updateExpense);
          setIsModalOpen(true);
        }

        if (hasProperty("ongoingManagement")) {
          setManagementProcess(incomingData.ongoingManagement);

          const expenseManagement = expenseManagements.find(
            (el) => el.process === incomingData.ongoingManagement
          )!;

          if (expenseManagement) setCurrentManagement(expenseManagement);
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const expenseManagement = expenseManagements.find(
      (el) => el.process === managementProcess
    )!;

    if (expenseManagement) setCurrentManagement(expenseManagement);
  }, [expenseManagements]);

  return (
    <Modal
      title={title}
      onCancel={() => setIsModalOpen(false)}
      destroyOnClose
      open={isModalOpen}
      footer={null}
      cancelText="Cancelar"
    >
      <ExpenseFormTwo
        expense={currentExpense}
        currentManagement={currentManagement}
      />
    </Modal>
  );
};

export default FormModal;
