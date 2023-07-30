// src/infrastructure/redux-saga/rootSaga.ts
import { all } from "redux-saga/effects";
import expensesManagement from "./expenses/management";

export function* rootSaga() {
  yield all([...expensesManagement]);
}
