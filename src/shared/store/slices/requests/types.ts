import { IRequestItem } from "src/shared/models";

export interface RequestsState {
  requests: IRequestItem[];
  selectedRequestId: string | null;
  isLoadingGet: boolean;
  isLoadingUpdate: boolean;
}
