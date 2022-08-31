import { call, put, takeLatest } from "redux-saga/effects";

import { PayloadAction } from "@reduxjs/toolkit";

import { AxiosResponse } from "axios";

import { fetchGetRequests, fetchUpdateRequest } from "src/shared/api";

import { IRequestItem } from "src/shared/models";

import { requestsSlice } from "./requests.slice";

import {
  fetchGetRequestsAction,
  fetchUpdateRequestsAction,
} from "./requests.action";

const { setRequests, setLoadingGet, setLoadingUpdate, updateRequests } =
  requestsSlice.actions;

function* getRequestsSaga() {
  try {
    yield put(setLoadingGet(true));

    const { data }: AxiosResponse<IRequestItem[]> = yield call(
      fetchGetRequests
    );

    yield put(setRequests(data));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setLoadingGet(false));
  }
}

function* updateRequestSaga({ payload }: PayloadAction<IRequestItem>) {
  try {
    yield put(setLoadingUpdate(true));

    const { data }: AxiosResponse<IRequestItem> = yield call(
      fetchUpdateRequest,
      payload
    );

    yield put(updateRequests(data));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setLoadingUpdate(false));
  }
}

export function* requestsSaga() {
  yield takeLatest(fetchGetRequestsAction, getRequestsSaga);
  yield takeLatest(fetchUpdateRequestsAction, updateRequestSaga);
}
