import { MapContainer, TileLayer, useMap } from 'react-leaflet'

export default function Map({coordinates})
{
    function ChangeView({coordinates})
    {
        const map = useMap();
        map.setView(coordinates);
        return null;
    }

    return (
        <MapContainer id="map" center={coordinates} zoom={13} scrollWheelZoom={false}>
            <ChangeView coordinates={coordinates}/>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}


