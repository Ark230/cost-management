// src/app/containers/ExpenseTracker/components/BudgetForm.tsx
import React, { useRef } from "react";
import styles from "./BudgetForm.module.css";

export interface BudgetFormProps {
  setMonthlyBudget: (budget: number) => void;
}

const BudgetForm: React.FC<BudgetFormProps> = ({ setMonthlyBudget }) => {
  const budgetInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMonthlyBudget(parseFloat(budgetInput.current!.value));
  };

  return (
    (
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="monthlyBudget">Set Monthly Budget:</label>
        <input
          type="number"
          id="monthlyBudget"
          step="0.01"
          min="0"
          ref={budgetInput}
        />
        <button type="submit">Set Budget</button>
      </form>
    ) ?? null
  );
};

export default BudgetForm;
