import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IStoreItem } from "src/shared/models";

import { StoresState } from "./types";

const initialState: StoresState = {
  stores: [],
  isLoading: false,
};

export const storesSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setStores(state, action: PayloadAction<IStoreItem[]>) {
      state.stores = action.payload;
    },
  },
});

export const storesReducer = storesSlice.reducer;
