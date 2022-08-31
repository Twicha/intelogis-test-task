import { IStoreItem } from "src/shared/models";

export interface StoresState {
  stores: IStoreItem[];
  isLoading: boolean;
}
