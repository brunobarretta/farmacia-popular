// import { GoogleMap, InfoWindow, Marker, useLoadScript } from '@react-google-maps/api';
import { useEffect, useMemo, useRef, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Map, { GeoJSONSource, Layer, MapRef, Marker, Source } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from 'axios';
import { clusterCountLayer, clusterLayer, unclusteredCircleLayer, unclusteredTextLayer } from './layers';
import { useFarmaciaContext } from '../../hooks/useFarmacia';

interface Farmacia {
  _id: string,
  nome: string,
  cnpj: string,
  endereco: string,
  cidade: string,
  estado: string,
  data_credenciamento: string,
  latitude: number,
  longitude: number,
}

const MapComponent = () => {
  const [mylocation, setMylocation] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [forceUpdate, setForceUpdate] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { farmacias, setFarmacias } = useFarmaciaContext();
  const mapRef = useRef<MapRef>();
  const MapboxAPIConfig = "pk.eyJ1IjoiYnRjb2RlcnMiLCJhIjoiY2x2ODV5dnpkMGhtczJqbnl5ZGU1czBpMCJ9.zesmIkCQE3ATFFvjYENPzg"
  const baseURL = "http://localhost:3000/api/farmacias";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if(farmacias && farmacias.length) {
      setLoading(false)
    } else {
      axios.get(baseURL).then((response) => {
        setFarmacias(response.data);
        setLoading(false)
      });
    }
  }, [])

  useEffect(() => {

    const features = farmacias.map((farmacia:Farmacia) => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [farmacia.longitude, farmacia.latitude],
      },
      properties: {
        id: farmacia._id,
        nome: farmacia.nome,
        cnpj: farmacia.cnpj,
        data_credenciamento: farmacia.data_credenciamento
      },
    }));

    setData({
      type: 'FeatureCollection',
      features,
    });

  }, [farmacias])

  useEffect(() => {
    if (mylocation == null) {
      navigator.geolocation.getCurrentPosition(
        position => setMylocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }),
        error => console.log(error)
      );
    }
  }, [mylocation]);

  const handleMarkerClick = (farmacia:Farmacia) => {
      setSelectedMarker(farmacia);
  };

  const handlePopupClose = () => {
      setSelectedMarker(null);
  };

  const handleLocateClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          if (mapRef.current) {
            mapRef.current.flyTo({ center: [longitude, latitude], zoom: 15 });
          }
        },
        (error) => {
          console.error('Erro ao obter a localização: ', error);
        }
      );
    } else {
      alert('Geolocalização não é suportada pelo seu navegador.');
    }
  };

  const handleSearch = async () => {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchQuery)}.json?access_token=${MapboxAPIConfig}`
    );
    const data = await response.json();
    if (data.features && data.features.length > 0) {
      const [longitude, latitude] = data.features[0].geometry.coordinates;
      if (mapRef.current) {
        mapRef.current.flyTo({ center: [longitude, latitude], zoom: 15 });
      }
    } else {
      alert('Não foi possível encontrar o endereço.');
    }
  };

  useEffect(() => {
    if (selectedMarker) {
      setForceUpdate(true);
    } else {
      setForceUpdate(false);
    }
  }, [selectedMarker]);

  const markers = useMemo(() => farmacias.map((farmacia:Farmacia) => (
    <Marker 
      key={farmacia._id}
      longitude={farmacia.longitude}
      latitude={farmacia.latitude}
      onClick={() => {
        handleMarkerClick(farmacia);
      }}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer'
      }}>
    </Marker>)
  ), [farmacias]);

  const onClick = event => {
    console.log(event)
    const feature = event.features[0];
    const clusterId = feature.properties.cluster_id;

    const mapboxSource = mapRef.current.getSource('farmacias') as GeoJSONSource;

    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) {
        return;
      }

      mapRef.current.easeTo({
        center: feature.geometry.coordinates,
        zoom,
        duration: 500
      });
    });
  };

  return (
    <div className="h-[calc(100vh-72px)]">
      <div className="absolute z-10 w-full flex items-center justify-center mt-5">
          <div className="flex items-center justify-center w-3/5">
            <input
              type="text"
              placeholder="Pesquisar endereço"
              className="rounded-l-full p-2 px-4 h-12 w-1/2 border border-gray-800 outline-none"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="px-4 py-2 h-12 bg-gray-800 text-white rounded-r-full border-t border-b border-r border-gray-800 flex items-center"
            >
              Buscar
              <i className="fas fa-search ml-2"></i>
            </button>
            <button
              onClick={handleLocateClick}
              className="ml-2 px-4 py-2 h-12 bg-gray-800 text-white rounded-full flex items-center border border-white"
            >
              <i className="fas fa-location-arrow"></i>
            </button>
          </div>
      </div>

      <div className='absolute z-10 bottom-0 mb-5 w-full flex items-center justify-center text-white'>
          <div className="px-4 py-2 h-12 bg-rose-500 text-white rounded-full flex items-center border border-white">
            <i className="fa-solid fa-location-dot mr-1"></i>
            {`${farmacias.length.toLocaleString()} Farmácias Credenciadas`}
          </div>
      </div>

      {mylocation && mylocation.lat ?
        <Map
          ref={mapRef}
          mapboxAccessToken={MapboxAPIConfig}
          initialViewState={{
            longitude: mylocation.lng,
            latitude: mylocation.lat,
            zoom: 12,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          interactiveLayerIds={[clusterLayer.id]}
          onClick={onClick}
        >
          {/* {markers}

          {selectedMarker && forceUpdate && (
            <Popup
              key={selectedMarker._id}
              longitude={selectedMarker.longitude}
              latitude={selectedMarker.latitude}
              anchor="bottom"
              onClose={handlePopupClose}
              closeOnClick={true}
              offset={25}
            >
              <div>
                <h3 style={{ margin: 5 }}>{selectedMarker.nome}</h3>
              </div>
            </Popup>
          )} */}

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
        : null}
    </div>
  );
};

export default MapComponent;