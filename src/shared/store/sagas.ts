import { all } from "redux-saga/effects";

import { requestsSaga, storesSaga } from "./slices";

export default function* rootSaga() {
  yield all([storesSaga(), requestsSaga()]);
}
