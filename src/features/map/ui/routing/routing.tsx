import { FC, useEffect } from "react";

import * as L from "leaflet";

import { useMap } from "react-leaflet";

import { useAppSelector } from "src/shared/hooks";

import { IRequestItem, TLatLng } from "src/shared/models";

import "leaflet-routing-machine";

interface Props {
  isUpdateMap?: boolean;
}

export const Routing: FC<Props> = ({ isUpdateMap }): null => {
  const map: L.Map = useMap();

  const { selectedRequestId, requests } = useAppSelector(
    ({ requests }) => requests
  );

  const { stores } = useAppSelector(({ stores }) => stores);

  const request: IRequestItem | undefined = requests.find(
    ({ id }) => id === selectedRequestId
  );

  const startCoords: TLatLng | undefined = stores.find(
    (store) => store.id === request?.startStoreId
  )?.coords;

  const endCoords: TLatLng | undefined = stores.find(
    (store) => store.id === request?.endStoreId
  )?.coords;

  useEffect(() => {
    if (!map || !startCoords || !endCoords) return;

    const routingControl = L.Routing.control({
      plan: L.Routing.plan([L.latLng(startCoords), L.latLng(endCoords)], {
        createMarker: function (i, wp) {
          L.Marker.prototype.options.icon = L.icon({
            iconUrl:
              "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
            iconAnchor: [wp.latLng.lat - 40, wp.latLng.lng + 25],
          });

          return L.marker(wp.latLng, {
            draggable: false,
          })
            .bindPopup(!i ? "Start" : "End")
            .openPopup();
        },
        routeWhileDragging: false,
      }),
      addWaypoints: false,
      collapsible: true,
    }).addTo(map);

    map.fitBounds([startCoords, endCoords]);

    return () => {
      map.removeControl(routingControl);
    };
  }, [map, startCoords, endCoords]);

  useEffect(() => {
    if (isUpdateMap) {
      map.invalidateSize();

      if (startCoords && endCoords) {
        map.fitBounds([startCoords, endCoords]);
      }
    }
  }, [map, isUpdateMap, startCoords, endCoords]);

  return null;
};
