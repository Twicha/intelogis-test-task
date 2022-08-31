import { combineReducers } from "@reduxjs/toolkit";

import { requestsReducer, storesReducer } from "./slices";

export const rootReducer = combineReducers({
  stores: storesReducer,
  requests: requestsReducer,
});
