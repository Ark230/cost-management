// src/infrastructure/redux-saga/rootSaga.ts
import { all } from "redux-saga/effects";
// import { watchUserSagas } from "./sagas/userSagas";

export function* rootSaga() {
  yield all([
    // watchUserSagas(),
    // Add more sagas here
  ]);
}
