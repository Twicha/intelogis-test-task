import { call, put, takeLatest } from "redux-saga/effects";

import { AxiosResponse } from "axios";

import { fetchGetStores } from "src/shared/api";

import { IStoreItem } from "src/shared/models";

import { storesSlice } from "./stores.slice";

import { fetchGetStoresAction } from "./stores.action";

const { setStores, setLoading } = storesSlice.actions;

function* getStoresSaga() {
  try {
    yield put(setLoading(true));

    const response: AxiosResponse<IStoreItem[]> = yield call(fetchGetStores);

    yield put(setStores(response.data));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setLoading(false));
  }
}

export function* storesSaga() {
  yield takeLatest(fetchGetStoresAction, getStoresSaga);
}
