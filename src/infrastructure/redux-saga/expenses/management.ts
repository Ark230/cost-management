import { call, delay, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { Expense } from "@domain/entities/Expense";
import { expenses } from "@/infrastructure/network";
import {
  expensesFetched,
  handleExpensesLoader,
} from "@/application/config/redux/reducers/expenses";
import { RequestElements } from "@/domain/types/network";
import { addExpense, updateExpense } from "@redux/types";

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

function* addExpenseSaga(action: PayloadAction<Partial<Expense>>) {
  try {
    // handleExpensesLoader({
    //   process: "addExpense",
    //   isLoading: true,
    // });
    // const response: Expense[] = yield call(api.get, "/expenses"); // reemplazar con tu endpoint
    // yield put(fetchExpensesSuccess(response));
    // handleExpensesLoader({ process: "addExpense", isLoading: false });
  } catch (err) {
    // maneja el error aquí
  }
}

function* updateExpenseSaga(action: PayloadAction<Partial<Expense>>) {
  try {
    const {
      payload: { id, name, category, amount },
    } = action;

    yield put(
      handleExpensesLoader({
        process: "updateExpense",
        isLoading: true,
      })
    );

    //SharingService.setSubject({ ongoingManagement: "updateExpense"});

    const requestElements: RequestElements = {
      pathVariables: {
        id: id!,
      },
      body: {
        name,
        category,
        amount,
      },
    };

    yield delay(2000);

    // const response: Expense[] = yield call(
    //   expenses.updateExpense,
    //   requestElements
    // );

    yield put(
      handleExpensesLoader({
        process: "updateExpense",
        isLoading: false,
        processEnded: true,
      })
    );
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

function* watchAddExpense() {
  yield takeEvery(addExpense.type, addExpenseSaga);
}

function* watchUpdateExpense() {
  yield takeEvery(updateExpense.type, updateExpenseSaga);
}

function* watchFetchExpenses() {
  yield takeEvery("expenses/fetchExpensesType", fetchExpensesSaga);
}

export default [watchFetchExpenses(), watchAddExpense(), watchUpdateExpense()];
