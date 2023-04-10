import { useEffect, useState } from 'react';
import Map from './Components/Map';
import './App.css'
import Navigate from './Components/Navigate';
import GeoJSONInput from './Components/GeoJSONInput';

function App() {
    const [coordinates, setCoordinates] = useState([51.505, -0.09]);

    return (
        <div className="App">
            <h1>Map demo application</h1>
            <GeoJSONInput />
            <Navigate coordinates={coordinates} setCoordinates={setCoordinates}/>
            <Map coordinates={coordinates}/>
        </div>
    )
}

export default App
