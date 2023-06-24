import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@redux/rootReducer";

import {
  BudgetForm,
  ExpenseForm,
  ExpenseTable,
  BudgetInfo,
} from "@components/index";
import { calculateCurrentMonthExpenses } from "./helpers/index.js";

import styles from "./ExpenseTracker.module.scss";

const ExpenseTracker = () => {
  const categories = ["Groceries", "Tools", ""];
  const [monthlyBudget, setMonthlyBudget] = useState<number>(0);
  const expenses = useSelector((state: RootState) => state.expenses);

  return (
    <div className={styles.container}>
      <div className={styles.expenseTracker}>
        <h1>Expense Tracker</h1>
        <BudgetForm setMonthlyBudget={setMonthlyBudget} />
        <ExpenseForm categories={categories} />
        <ExpenseTable expenses={expenses} />
        <BudgetInfo
          monthlyBudget={monthlyBudget}
          totalExpenses={calculateCurrentMonthExpenses(expenses)}
        />
      </div>
    </div>
  );
};

export default ExpenseTracker;
