import { Expense } from "@/domain/entities/Expense";
import { createAction } from "@reduxjs/toolkit";

export const addExpense = createAction<Partial<Expense>>(
  "expenses-types/addExpense"
);
export const updateExpense = createAction<Partial<Expense>>(
  "expenses-types/updateExpense"
);
