import { IStoreItem } from "src/shared/models";

import { apiInstance } from "../../base";

export const fetchGetStores = async () => {
  const response = await apiInstance.get<IStoreItem[]>("/stores");

  return response;
};
