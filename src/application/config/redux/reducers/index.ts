import { initialState } from "@/domain/entities/redux/expense";

import { createSlice } from "@reduxjs/toolkit";

import * as managementReducers from "@/application/config/redux/reducers/expenses/management";

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    ...managementReducers,
  },
});

export const { addExpense } = expensesSlice.actions;

export default expensesSlice.reducer;
