import { call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { Expense } from "@domain/entities/Expense";
import { expenses } from "@/infrastructure/network";
import {
  expensesFetched,
  handleExpensesLoader,
} from "@/application/config/redux/reducers/expenses";
import { RequestElements } from "@/domain/types/network";

function* fetchExpensesSaga(): Generator<any, void, any> {
  try {
    yield put(
      handleExpensesLoader({
        process: "fetchExpenses",
        isLoading: true,
        processEnded: false,
      })
    );

    const response: Expense[] = (yield call(expenses.getExpenses)).data;

    yield put(expensesFetched(response));

    yield put(
      handleExpensesLoader({
        process: "fetchExpenses",
        isLoading: false,
        processEnded: true,
      })
    );
  } catch (error) {
    console.log(error, "print console");
  }
}

function* addExpenseSaga(action: PayloadAction<Expense>) {
  try {
    handleExpensesLoader({
      process: "addExpense",
      isLoading: true,
    });

    // const response: Expense[] = yield call(api.get, "/expenses"); // reemplazar con tu endpoint
    // yield put(fetchExpensesSuccess(response));

    handleExpensesLoader({ process: "addExpense", isLoading: false });
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
