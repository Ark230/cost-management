import Modal from "antd/es/modal/Modal";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import useExpenseFormContext from "@hooks/context-hooks/useExpenseFormContext";

interface ExpenseFormModal {
  title: string;
}

const ExpenseFormModal = ({ title }: ExpenseFormModal) => {
  const {
    expenseFormData,
    expenseFormData: {
      modal: { isModalOpen },
    },
    setExpenseFormData,
  } = useExpenseFormContext();

  return (
    <Modal
      title={title}
      onCancel={() => {
        setExpenseFormData({
          ...expenseFormData,
          modal: { ...expenseFormData.modal, isModalOpen: false },
        });
      }}
      destroyOnClose
      open={isModalOpen}
      footer={null}
      cancelText="Cancelar"
    >
      <ExpenseForm />
    </Modal>
  );
};

export default ExpenseFormModal;
