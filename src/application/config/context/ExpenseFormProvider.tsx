import { ExpenseManagement } from "@/domain/entities/redux/expense";
import { Dispatch, SetStateAction } from "react";
import { createContext, useState } from "react";
import { Expense } from "@/domain/entities/Expense";

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

const ExpensesFormContext = createContext<ExpenseFormContextType>({
  expenseFormData: {
    management: {
      currentManagement: {},
      managementProcess: "",
    },
    currentExpense: {},
    modal: { createOrUpdate: "", isModalOpen: false },
  },
  setExpenseFormData: () => {},
});

export const ExpenseFormProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [expenseFormData, setExpenseFormData] = useState<ExpenseFormData>({
    management: {
      managementProcess: "",
      currentManagement: {},
    },
    currentExpense: {},
    modal: { createOrUpdate: "", isModalOpen: false },
  });

  return (
    <ExpensesFormContext.Provider
      value={{ expenseFormData, setExpenseFormData }}
    >
      {children}
    </ExpensesFormContext.Provider>
  );
};

export default ExpensesFormContext;
