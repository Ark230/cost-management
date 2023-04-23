// src/app/containers/ExpenseTracker/components/BudgetInfo.tsx
import React from "react";
import styles from "./BudgetInfo.module.scss";

interface BudgetInfoProps {
  monthlyBudget: number;
  totalExpenses: number;
}

const BudgetInfo: React.FC<BudgetInfoProps> = ({
  monthlyBudget,
  totalExpenses,
}) => {
  const remainingBudget = monthlyBudget - totalExpenses;

  return (
    <div className={styles.budgetInfo}>
      <p>
        Monthly Budget: ${monthlyBudget} | Total Expenses: ${totalExpenses} |
        Remaining Budget: ${remainingBudget}
      </p>
      <progress
        className={styles.progressBar}
        value={totalExpenses}
        max={monthlyBudget}
      ></progress>
    </div>
  );
};

export default BudgetInfo;
