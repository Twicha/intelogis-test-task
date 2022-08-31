import { createAction } from "@reduxjs/toolkit";

import { IRequestItem } from "src/shared/models";

export const fetchGetRequestsAction = createAction("requests/fetchGetRequests");

export const fetchUpdateRequestsAction = createAction<IRequestItem>(
  "requests/fetchUpdateRequests"
);
