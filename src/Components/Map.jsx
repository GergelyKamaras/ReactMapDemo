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

            if (data["type"] === "Feature")
            {
                displayFeature(map, data);
            }
            if (data["type"] === "FeatureCollection")
            {
                data["features"].forEach((feature) => {
                    displayFeature(map, feature);
                })
            }

        }
    }

    function displayFeature(map, feature)
    {
            let type = feature["geometry"]["type"];
            let coordinates = feature["geometry"]["coordinates"];

            let layer = L.geoJSON(feature).addTo(map);
            layers.push(layer);

            switch (type)
            {
                case "Point":
                    map.setView([coordinates[1], coordinates[0]]);
                    break;

                case "MultiPoint":
                    map.setView([coordinates[0][1], coordinates[0][0]]);
                    break;

                case "LineString":
                    map.setView([coordinates[0][1], coordinates[0][0]]);
                    break;

                case "Polygon":
                    map.setView([coordinates[0][0][1], coordinates[0][0][0]]);
                    break;

                case "MultiLineString":
                    map.setView([coordinates[0][0][1], coordinates[0][0][0]]);
                    break;

                case "MultiPolygon":
                    map.setView([coordinates[0][0][0][1], coordinates[0][0][0][0]]);
                    break;
            }
    }

    useEffect(() => {
        setShouldDisplayData(false);
    }, [shouldDisplayData])

    useEffect(() => {
        setShouldCenterView(false);
    }, [shouldCenterView])

    return (
        <MapContainer id="map" center={coordinates} zoom={5} scrollWheelZoom={false}>
            <ChangeView coordinates={coordinates}/>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <DisplayJSON />
        </MapContainer>
    )
}


