import { useEffect, useState } from 'react';
import Map from './Components/Map';
import './App.css'
import Navigate from './Components/Navigate';
import GeoJSONInput from './Components/GeoJSONInput';

function App() {
    const [coordinates, setCoordinates] = useState([51.505, -0.09]);
    const [geoData, setGeoData] = useState("");
    const [shouldDisplayData, setShouldDisplayData] = useState(false);
    const [shouldCenterView, setShouldCenterView] = useState(false);

    return (
        <div className="App">
            <h1>Map demo application</h1>
            <GeoJSONInput geoData={geoData} setGeoData={setGeoData} setShouldDisplayData={setShouldDisplayData}/>
            <Map coordinates={coordinates} geoData={geoData} shouldDisplayData={shouldDisplayData} setShouldDisplayData={setShouldDisplayData} shouldCenterView={shouldCenterView} setShouldCenterView={setShouldCenterView}/>
            <Navigate coordinates={coordinates} setCoordinates={setCoordinates} setShouldCenterView={setShouldCenterView}/>
        </div>
    )
}

export default App
