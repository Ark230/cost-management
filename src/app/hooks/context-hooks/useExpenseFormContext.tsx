import { Dispatch, SetStateAction } from "react";
import { useContext } from "react";
import ExpenseFormContext from "@context/ExpenseFormProvider";
import { Expense } from "@/domain/entities/Expense";
import { ExpenseManagement } from "@/domain/entities/redux/expense";

interface ExpenseFormData {
  currentExpense: Partial<Expense>;
  management: {
    currentManagement: Partial<ExpenseManagement>;
    managementProcess: string;
  };
  modal: {
    createOrUpdate: string;
    isModalOpen: boolean;
  };
}

interface ExpenseFormContextType {
  expenseFormData: ExpenseFormData;
  setExpenseFormData: Dispatch<SetStateAction<ExpenseFormData>>;
}
const useExpenseFormContext = (): ExpenseFormContextType => {
  return useContext(ExpenseFormContext);
};

export default useExpenseFormContext;
