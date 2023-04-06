import { useEffect, useState } from 'react';
import './App.css'

function App() {
    useEffect( () => {

        // Initialization issue solved via: https://stackoverflow.com/questions/71809240/uncaught-error-map-container-is-already-initialized
        var container = L.DomUtil.get("map");

        if (container != null) {
        container._leaflet_id = null;
        }

        var map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    }, [])

    return (
        <div className="App">
            <h1>Map demo application</h1>
            <div id="map"></div>
        </div>
    )
}

export default App
