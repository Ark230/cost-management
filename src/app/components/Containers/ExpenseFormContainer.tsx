import ExpenseFormModal from "../Modal/ExpenseFormModal";
import { useEffect, useState } from "react";
import { ExpensesSharingService } from "@/app/utils/subject-instances";
import { RootState } from "@/application/config/redux/rootReducer";
import { useSelector } from "react-redux";
import useExpenseFormContext from "@hooks/context-hooks/useExpenseFormContext";

const ExpenseFormContainer = () => {
  const [managementProcess, setManagementProcess] = useState("");
  const {
    expenseFormData,
    expenseFormData: {
      modal: { createOrUpdate },
    },
    setExpenseFormData,
  } = useExpenseFormContext();

  const expenseManagements = useSelector(
    (store: RootState) => store.expenses.expenseManagements
  );

  const getModalTitle = (process: string): string => {
    return process === "update" ? "Editar Gasto" : "Crear Gasto";
  };

  useEffect(() => {
    const subscription = ExpensesSharingService.getSubject().subscribe(
      (incomingData: any) => {
        const hasProperty = (prop: string): boolean =>
          incomingData.hasOwnProperty(prop);

        if (hasProperty("updateExpense")) {
          setExpenseFormData({
            ...expenseFormData,
            currentExpense: incomingData.updateExpense,
            modal: {
              createOrUpdate: "update",
              isModalOpen: true,
            },
          });
        }

        if (hasProperty("ongoingManagement")) {
          setManagementProcess(incomingData.ongoingManagement);
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

    if (expenseManagement) {
      setExpenseFormData({
        ...expenseFormData,
        management: {
          ...expenseFormData.management,
          currentManagement: expenseManagement,
        },
      });

      if (
        expenseManagement.processEnded === true &&
        expenseManagement.process === managementProcess
      ) {
        setExpenseFormData({
          ...expenseFormData,
          modal: {
            ...expenseFormData.modal,
            isModalOpen: false,
          },
        });
      }
    }
  }, [expenseManagements]);

  return <ExpenseFormModal title={getModalTitle(createOrUpdate)} />;
};

export default ExpenseFormContainer;
