import { useEffect, useRef, useState } from "react";
import { useFarmaciaContext } from "../../hooks/useFarmacia";
import * as Styles from "./styles";
import MapDisplay from "../../components/Map/Map";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { GeoJSONSource } from "react-map-gl";
import Loading from "../../components/Loading/loading";

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

interface Location {
    lat: number,
    lng: number
}

const PharmMap = () => {
    const { farmacias } = useFarmaciaContext();
    const [data, setData] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const mapboxToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
    const mapRef = useRef<mapboxgl.Map | null>(null);
    const [mylocation, setMylocation] = useState<Location | null>(null);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (farmacias && farmacias.length) {
            const features = farmacias.map((farmacia:Farmacia) => ({
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [farmacia.longitude, farmacia.latitude],
                },
                properties: {
                    id: farmacia._id,
                    nome: farmacia.nome,
                    cnpj: farmacia.cnpj,
                    data_credenciamento: farmacia.data_credenciamento,
                },
            }));

            setData({
                type: "FeatureCollection",
                features,
            });
        }
    }, [farmacias]);

    const handleSearch = async () => {
        const response = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
                searchQuery
            )}.json?access_token=${mapboxToken}`
        );
        const data = await response.json();
        if (data.features && data.features.length > 0) {
            const [longitude, latitude] = data.features[0].geometry.coordinates;
            if (mapRef.current) {
                mapRef.current.flyTo({ center: [longitude, latitude], zoom: 15 });
            }
        } else {
            alert("Não foi possível encontrar o endereço.");
        }
    };

    const handleInputChange = async (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.length > 2) {
            const response = await fetch(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
                    query
                )}.json?autocomplete=true&country=BR&language=pt-BR&access_token=${mapboxToken}`
            );
            const data = await response.json();
            setSuggestions(data.features || []);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion:any) => {
        const [longitude, latitude] = suggestion.geometry.coordinates;
        if (mapRef.current) {
            mapRef.current.flyTo({ center: [longitude, latitude], zoom: 15 });
        }
        setSearchQuery(suggestion.place_name);
        setSuggestions([]);
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
                    console.error("Erro ao obter a localização: ", error);
                }
            );
        } else {
            alert("Geolocalização não é suportada pelo seu navegador.");
        }
    };

    useEffect(() => {
        if (mylocation == null) {
            navigator.geolocation.getCurrentPosition(
                position => setMylocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }),
                error => {
                    setMylocation({lat: -15.7942, lng: -47.8825})
                    console.log(error)}
            );
        }
    }, [mylocation]);

    const onClick = (event:any) => {
        
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

    console.log(suggestions)

    return (
        <Styles.MapContainer>
            {!data && <Styles.LoadingContainer>
                <Loading />
            </Styles.LoadingContainer>}

            <Styles.SearchBar>
                <Styles.SearchContainer>

                    <Styles.Wrapper>
                        <Styles.SearchInput
                            type="text"
                            placeholder="Pesquisar endereço"
                            value={searchQuery}
                            onChange={handleInputChange}
                        />

                        {searchQuery.length > 0 && 
                            <Styles.ClearIcon 
                                className="fa fa-times" 
                                onClick={() => {
                                    setSearchQuery("");
                                    setSuggestions([]);
                                }
                                } 
                            />
                        }

                        {suggestions.length > 0 && (
                            <Styles.Suggestions>
                                {suggestions.map((suggestion:any) => (
                                    <Styles.SuggestionItem
                                        key={suggestion.id}
                                        onClick={() => handleSuggestionClick(suggestion)}
                                    >
                                        {suggestion.place_name}
                                    </Styles.SuggestionItem>
                                ))}
                            </Styles.Suggestions>
                        )}
                    </Styles.Wrapper>
   
                    <Styles.SearchButton onClick={handleSearch}>
                        <span>Buscar</span>
                        <i className="fas fa-search"></i>
                    </Styles.SearchButton>

                    <Styles.LocateButton onClick={handleLocateClick}>
                        <i className="fas fa-location-arrow"></i>
                    </Styles.LocateButton>

                </Styles.SearchContainer>
            </Styles.SearchBar>

            <Styles.BottomBar>
                <div className="info-box">
                    <i className="fa-solid fa-location-dot"></i>
                    {`${farmacias.length.toLocaleString()} Farmácias Credenciadas`}
                </div>
            </Styles.BottomBar>

            {mylocation ? 
                <MapDisplay
                    ref={mapRef}
                    data={data}
                    mapboxToken={mapboxToken}
                    initialViewState={{
                        longitude: mylocation.lng,
                        latitude: mylocation.lat,
                        zoom: 12,
                    }}
                    onClick={onClick}
                /> : null
            }

        </Styles.MapContainer>
    );
};

export default PharmMap;