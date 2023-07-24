import { combineReducers } from "@reduxjs/toolkit";
import expenseReducer from "./reducers/expenseReducer";

export const rootReducer = combineReducers({
  expenses: expenseReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
