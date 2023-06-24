// src/app/containers/ExpenseTracker/components/ExpenseForm.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "@redux/actions/expenseActions";
import { Expense } from "@domain/entities/Expense";
import styles from "./ExpenseForm.module.scss";

interface ExpenseFormProps {
  categories: string[];
}

const ExpenseForm = ({ categories }: ExpenseFormProps) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim() || amount <= 0 || !category.trim()) return;

    const newExpense: Expense = {
      id: Date.now(),
      description,
      amount,
      date: new Date().toISOString(),
      category,
    };

    dispatch(addExpense(newExpense));
    setDescription("");
    setAmount(0);
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="description">Expense Name:</label>
      <input
        name="expense-description"
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="amount">Amount:</label>
      <input
        name="expense-amount"
        type="number"
        id="amount"
        step="0.01"
        min="0"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
      />
      <label htmlFor="category">Category:</label>
      <select
        name="expense-category"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
