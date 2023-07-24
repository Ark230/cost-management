import { Expense } from "@/domain/entities/Expense";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ExpenseSlice } from "@/domain/entities/redux/expense";

export const addExpense = (
  state: ExpenseSlice,
  action: PayloadAction<Expense>
) => {
  state.content.push(action.payload);
};
