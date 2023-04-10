import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

export default function Map({coordinates, geoData, shouldDisplayData, setShouldDisplayData, shouldCenterView, setShouldCenterView})
{
    function ChangeView({coordinates})
    {
        if (shouldCenterView)
        {
        const map = useMap();
        map.setView(coordinates);
            setShouldCenterView(false);
        return null;
    }
    }

    useEffect(() => {
        if (displayData)
        {
            console.log(geoData)
            setDisplayData(false);
        }

    useEffect(() => {
        setShouldDisplayData(false);
    }, [shouldDisplayData])

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


