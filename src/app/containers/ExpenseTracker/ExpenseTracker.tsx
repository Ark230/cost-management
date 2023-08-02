import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/application/config/redux/rootReducer.js";

import {
  BudgetForm,
  ExpenseForm,
  ExpenseTable,
  BudgetInfo,
} from "@components/index";
import { getTotalExpensesAmount } from "./helpers/index.js";

import styles from "./ExpenseTracker.module.scss";
import { useDispatch } from "react-redux";
import { fetchExpenses } from "@/application/config/redux/reducers/expenses/types.js";

const ExpenseTracker = () => {
  const categories = ["Groceries", "Tools", ""];
  const [monthlyBudget, setMonthlyBudget] = useState<number>(0);
  const expenses = useSelector((state: RootState) => state.expenses.content);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.expenseTracker}>
        <h1>Expense Tracker</h1>
        <BudgetForm setMonthlyBudget={setMonthlyBudget} />
        <ExpenseForm categories={categories} />
        <BudgetInfo
          monthlyBudget={monthlyBudget}
          totalExpenses={getTotalExpensesAmount(expenses)}
        />
        <ExpenseTable expenses={expenses} />
      </div>
    </div>
  );
};

export default ExpenseTracker;
