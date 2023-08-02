import { combineReducers } from "@reduxjs/toolkit";
import expenseSlice from "./reducers/expenses";

export const rootReducer = combineReducers({
  expenses: expenseSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
