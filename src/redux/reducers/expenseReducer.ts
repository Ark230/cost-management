// src/state/reducers/expenseReducer.ts
import { ADD_EXPENSE, AddExpenseAction } from "../actions/expenseActions";
import { Expense } from "../../domain/entities/Expense";

export type ExpenseState = Expense[];

const initialState: ExpenseState = [];

export const expenseReducer = (
  state = initialState,
  action: AddExpenseAction
): ExpenseState => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.payload];
    default:
      return state;
  }
};
