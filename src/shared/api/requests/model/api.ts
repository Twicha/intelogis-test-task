import { IRequestItem } from "src/shared/models";

import { apiInstance } from "../../base";

export const fetchGetRequests = async () => {
  const response = await apiInstance.get<IRequestItem[]>("/requests");

  return response;
};

export const fetchUpdateRequest = async (item: IRequestItem) => {
  const response = await apiInstance.put<IRequestItem>(
    `/requests/${item.id}`,
    item
  );

  return response;
};
