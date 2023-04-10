import { useEffect, useState } from 'react';
import Map from './Components/Map';
import './App.css'
import Navigate from './Components/Navigate';
import GeoJSONInput from './Components/GeoJSONInput';

function App() {
    const [coordinates, setCoordinates] = useState([51.505, -0.09]);
    const [geoData, setGeoData] = useState("");
    const [displayData, setDisplayData] = useState(false);

    useEffect(() => {

    }, [])

    return (
        <div className="App">
            <h1>Map demo application</h1>
            <GeoJSONInput geoData={geoData} setGeoData={setGeoData} setDisplayData={setDisplayData}/>
            <Navigate coordinates={coordinates} setCoordinates={setCoordinates} />
            <Map coordinates={coordinates} geoData={geoData} displayData={displayData} setDisplayData={setDisplayData} />
        </div>
    )
}

export default App
