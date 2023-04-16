import { Expense } from "@domain/entities/Expense";

export const calculateCurrentMonthExpenses = (
  expenses: Array<Expense>
): number => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const currentMonthExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return (
      expenseDate.getMonth() === currentMonth &&
      expenseDate.getFullYear() === currentYear
    );
  });
  return currentMonthExpenses.reduce(
    (acc, expense) => acc + (expense.amount > 0 ? expense.amount : 0),
    0
  );
};
