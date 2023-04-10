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
            // Remove old markers
            layers.forEach(l => map.removeLayer(l));

            let data = JSON.parse(geoData);
            let type = data["geometry"]["type"];
            let coordinates = data["geometry"]["coordinates"];

            switch (type)
            {
                case "Point":
                    map.setView(coordinates);
                    let marker = L.marker(coordinates).addTo(map);
                    layers.push(marker);
                    break;

                case "MultiPoint":
                    map.setView(coordinates[0]);
                    coordinates.forEach(c => {
                        let marker = L.marker(c).addTo(map);
                        layers.push(marker);
                    })
                    break;

                case "LineString":
                    map.setView(coordinates[0]);
                    let line = L.polyline(coordinates).addTo(map);
                    layers.push(line);
                    break;

                case "MultiLineString":
                    map.setView(coordinates[0][0]);
                    coordinates.forEach((coordinateGroup) => {
                        let line = L.polyline(coordinates).addTo(map);
                        layers.push(line);
                    });
                    break;
            }
        }
    }

    useEffect(() => {
        setShouldDisplayData(false);
    }, [shouldDisplayData])

    useEffect(() => {
        setShouldCenterView(false);
    }, [shouldCenterView])

    return (
        <MapContainer id="map" center={coordinates} zoom={2} scrollWheelZoom={false}>
            <ChangeView coordinates={coordinates}/>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <DisplayJSON />
        </MapContainer>
    )
}


