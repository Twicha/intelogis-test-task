import { configureStore } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";

import { rootReducer as reducer } from "./root-reducer";

import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const setupStore = () => {
  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export type RootState = ReturnType<typeof reducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore["dispatch"];
