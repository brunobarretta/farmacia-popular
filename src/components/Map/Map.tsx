import Map, { Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { clusterLayer, clusterCountLayer, unclusteredCircleLayer, unclusteredTextLayer } from "./layers";
import React from "react";

const MapDisplay = React.forwardRef(({data, onClick, mapboxToken, initialViewState}:any, ref:any) => {

  return (
    <Map
      ref={ref}
      mapboxAccessToken={mapboxToken}
      initialViewState={initialViewState}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      interactiveLayerIds={[clusterLayer.id]}
      onClick={onClick}
    >
      {data && (
        <Source
          id="farmacias"
          type="geojson"
          data={data}
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredCircleLayer} />
          <Layer {...unclusteredTextLayer} />
        </Source>
      )}
    </Map>
  );
});

export default MapDisplay;