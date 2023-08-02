import { call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { Expense } from "@domain/entities/Expense";
import { expenses } from "@/infrastructure/network";
import { expensesFetched } from "@/application/config/redux/reducers/expenses";
import { RequestElements } from "@/domain/types/network";

function* fetchExpensesSaga(): Generator<any, void, any> {
  try {
    const response: Expense[] = (yield call(expenses.getExpenses)).data;

    yield put(expensesFetched(response));
  } catch (error) {
    console.log(error, "print console");
  }
}

function* addExpenseSaga(action: PayloadAction<Expense>) {
  try {
    // const response: Expense[] = yield call(api.get, "/expenses"); // reemplazar con tu endpoint
    // yield put(fetchExpensesSuccess(response));
  } catch (err) {
    // maneja el error aquí
  }
}

function* deleteExpenseSaga(
  action: PayloadAction<Expense>
): Generator<any, void, any> {
  try {
    const requestElements: RequestElements = {
      pathVariables: { id: action.payload.id.toString() },
    };
    console.log("print desde el saga delete");
    const response: Expense[] = (yield call(
      expenses.deleteExpense,
      requestElements
    )).data; // reemplazar con tu endpoint
    // yield put(fetchExpensesSuccess(response));
  } catch (err) {
    // maneja el error aquí
  }
}

// Saga watcher para obtener gastos
function* watchAddExpense() {
  yield takeEvery("expenses/addExpense", addExpenseSaga);
}
// Saga watcher para obtener gastos
function* watchFetchExpenses() {
  yield takeEvery("expenses/fetchExpensesType", fetchExpensesSaga);
}

export default [watchFetchExpenses(), watchAddExpense()];
