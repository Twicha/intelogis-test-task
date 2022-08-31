import { AnyAction, Dispatch } from "@reduxjs/toolkit";

import { IRequestItem } from "src/shared/models";

import { fetchUpdateRequestsAction } from "src/shared/store/slices";

export const onChangeStoreHandler = (
  row: IRequestItem,
  value: string,
  storeType: "start" | "end",
  dispatch: Dispatch<AnyAction>
) => {
  const payload = { ...row };

  const isStartStore: boolean = storeType === "start";

  const isEndStore: boolean = storeType === "end";

  if (isStartStore) {
    payload.startStoreId = value;

    if (row.endStoreId === value) {
      payload.endStoreId = row.startStoreId;
    }
  }

  if (isEndStore) {
    payload.endStoreId = value;

    if (row.startStoreId === value) {
      payload.startStoreId = row.endStoreId;
    }
  }

  dispatch(fetchUpdateRequestsAction(payload));
};
