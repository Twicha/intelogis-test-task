import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../";

const selectStores = ({ stores }: RootState) => stores.stores;

export const selectStoreItems = createSelector(selectStores, (stores) =>
  stores.map(({ id: value, name: label }) => ({ value, label }))
);
