import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IRequestItem } from "src/shared/models";

import { RequestsState } from "./types";

const initialState: RequestsState = {
  requests: [],
  selectedRequestId: null,
  isLoadingGet: false,
  isLoadingUpdate: false,
};

export const requestsSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    setLoadingGet(state, { payload }: PayloadAction<boolean>) {
      state.isLoadingGet = payload;
    },
    setLoadingUpdate(state, { payload }: PayloadAction<boolean>) {
      state.isLoadingUpdate = payload;
    },
    setRequests(state, { payload }: PayloadAction<IRequestItem[]>) {
      state.requests = payload;
    },
    setSelectedRequestId(state, { payload }: PayloadAction<string>) {
      state.selectedRequestId = payload;
    },
    updateRequests(state, { payload }: PayloadAction<IRequestItem>) {
      const updatedRequestIndex: number = state.requests.findIndex(
        (request) => request.id === payload.id
      );

      if (updatedRequestIndex !== -1) {
        state.requests[updatedRequestIndex] = payload;
      }
    },
  },
});

export const requestsReducer = requestsSlice.reducer;
