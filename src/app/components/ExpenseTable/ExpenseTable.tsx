// src/app/containers/ExpenseTracker/components/ExpenseTable.tsx
import React from "react";
import { Expense } from "@domain/entities/Expense";
import styles from "./ExpenseTable.module.scss";

export interface ExpenseTableProps {
  expenses: Expense[];
}

const ExpenseTable = ({ expenses }: ExpenseTableProps) => {
  return (
    <table className={styles.expensesTable}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.category}</td>
            <td>${expense.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
