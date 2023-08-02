import { Expense } from "@/domain/entities/Expense";

export const getTotalExpensesAmount = (expenses: Expense[]): number => {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};
