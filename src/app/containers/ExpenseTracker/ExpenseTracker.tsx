import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "@redux/actions/expenseActions";
import { RootState } from "@redux/rootReducer";
import { Expense } from "@domain/entities/Expense";
import {
  BudgetForm,
  ExpenseForm,
  ExpenseTable,
  BudgetInfo,
} from "@components/index";
import { calculateCurrentMonthExpenses } from "./helpers/index.js";

import styles from "./ExpenseTracker.module.css";

const ExpenseTracker: React.FC = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const categories = ["Groceries", "Tools", "Medicine"];
  const [monthlyBudget, setMonthlyBudget] = useState<number>(0);
  const budgetInput = useRef<HTMLInputElement>(null);

  const expenses = useSelector((state: RootState) => state.expenses);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim() || amount <= 0 || !category.trim()) return;

    const newExpense: Expense = {
      id: Date.now(),
      description,
      amount,
      date: new Date().toISOString(),
      category, // Add category property
    };

    dispatch(addExpense(newExpense));
    setDescription("");
    setAmount(0);
    setCategory("");
    setCategory(""); // Reset the category input
  };

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
