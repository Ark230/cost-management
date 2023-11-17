import { Expense } from "@/domain/entities/Expense";
import { current, type PayloadAction } from "@reduxjs/toolkit";
import {
  ExpenseManagement,
  ExpenseSlice,
} from "@/domain/entities/redux/expense";

export const addExpense = (
  state: ExpenseSlice,
  action: PayloadAction<Expense>
) => {
  state.content.push(action.payload);
};

export const expensesFetched = (
  state: ExpenseSlice,
  action: PayloadAction<Expense[]>
) => {
  state.content = action.payload;
};

export const handleExpensesLoader = (
  state: ExpenseSlice,
  action: PayloadAction<Record<string, any>>
) => {
  const { payload: payloadManagement } = action;
  const currState = current(state);

  const availableManagement = currState.expenseManagements.find(
    (currManagement) => currManagement.process === payloadManagement.process
  );

  if (availableManagement) {
    const managementsFiltered = currState.expenseManagements.filter(
      (el) => el.process !== payloadManagement.process
    );
    state.expenseManagements = managementsFiltered;
  }

  state.expenseManagements.push(payloadManagement as ExpenseManagement);
};
