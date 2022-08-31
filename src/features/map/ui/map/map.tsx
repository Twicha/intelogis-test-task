import { FC, ReactElement } from "react";

import { MapContainer, TileLayer } from "react-leaflet";

import classNames from "classnames";

import { TLatLng } from "src/shared/models";

import { Routing } from "../routing";

import "./map.scss";

interface Props {
  className?: string;
  isUpdateMap?: boolean;
  center?: TLatLng;
}

export const Map: FC<Props> = ({
  className,
  isUpdateMap,
  center = [54.709818, 20.508482],
}): ReactElement => {
  return (
    <MapContainer
      className={classNames("map", className)}
      center={center}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Routing isUpdateMap={isUpdateMap} />
    </MapContainer>
  );
};
