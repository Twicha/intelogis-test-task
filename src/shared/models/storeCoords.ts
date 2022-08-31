import { TLatLng } from "./lat-lng";

export interface IStoreItem {
  id: string;
  name: string;
  coords: TLatLng;
}
