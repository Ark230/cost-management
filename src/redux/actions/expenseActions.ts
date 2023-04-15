// src/redux/actions/expenseActions.ts
import { Expense } from "@domain/entities/Expense";

export const ADD_EXPENSE = "ADD_EXPENSE";

export interface AddExpenseAction {
  type: typeof ADD_EXPENSE;
  payload: Expense;
}

export const addExpense = (expense: Expense): AddExpenseAction => ({
  type: ADD_EXPENSE,
  payload: expense,
});
