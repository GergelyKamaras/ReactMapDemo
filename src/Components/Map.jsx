import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

export default function Map({coordinates, geoData, shouldDisplayData, setShouldDisplayData, shouldCenterView, setShouldCenterView})
{
    const [layers, setLayers] = useState([]);

    function ChangeView({coordinates})
    {
        if (shouldCenterView)
        {
            const map = useMap();
            map.setView(coordinates);
            return null;
        }
    }

    function DisplayJSON()
    {
        const map = useMap();

        if (shouldDisplayData)
        {
            layers.forEach(l => map.removeLayer(l));
            let data = JSON.parse(geoData);
            let coordinates = data["geometry"]["coordinates"];
            map.setView(coordinates);
            let marker = L.marker(coordinates).addTo(map);
            layers.push(marker);
        }
    }

    useEffect(() => {
        setShouldDisplayData(false);
    }, [shouldDisplayData])

    useEffect(() => {
        setShouldCenterView(false);
    }, [shouldCenterView])

    return (
        <MapContainer id="map" center={coordinates} zoom={13} scrollWheelZoom={false}>
            <ChangeView coordinates={coordinates}/>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <DisplayJSON />
        </MapContainer>
    )
}


