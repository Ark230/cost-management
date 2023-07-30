import { call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { Expense } from "@domain/entities/Expense";
import { addExpense } from "@/application/config/redux/reducers";

// import { api } from "@infrastructure/api"; // reemplazar con tu archivo de configuración de la API

// Saga worker para obtener gastos
// function* fetchExpensesSaga() {
//   try {
//     const response: Expense[] = yield call(api.get, "/expenses"); // reemplazar con tu endpoint
//     yield put(fetchExpensesSuccess(response));
//   } catch (err) {
//     // maneja el error aquí
//   }
// }

// // Saga watcher para obtener gastos
// function* watchFetchExpenses() {
//   yield takeEvery(fetchExpenses.type, fetchExpensesSaga);
// }

function* addExpenseSaga(action: PayloadAction<Expense>) {
  try {
    console.log("print desde el saga");
    // const response: Expense[] = yield call(api.get, "/expenses"); // reemplazar con tu endpoint
    // yield put(fetchExpensesSuccess(response));
  } catch (err) {
    // maneja el error aquí
  }
}

// Saga watcher para obtener gastos
function* watchAddExpense() {
  yield takeEvery("expenses/addExpense", addExpenseSaga);
}

export default [watchAddExpense()];
