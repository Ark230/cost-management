import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/application/config/redux/rootReducer.js";

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
  const expenses = useSelector((state: RootState) => state.expenses.content);

  return (
    <div className={styles.container}>
      <div className={styles.expenseTracker}>
        <h1>Expense Tracker</h1>
        <BudgetForm setMonthlyBudget={setMonthlyBudget} />
        <ExpenseForm categories={categories} />
        <BudgetInfo
          monthlyBudget={monthlyBudget}
          totalExpenses={calculateCurrentMonthExpenses(expenses)}
        />
        <ExpenseTable expenses={expenses} />
      </div>
    </div>
  );
};

export default ExpenseTracker;
