import generateGeoJSONData from "../DataGeneration/datagenerator";

export default function GeoJSONInput({geoData, setGeoData, setShouldDisplayData})
{
    function handleGeneration(e)
    {
        e.preventDefault();
        let inputField = document.querySelector("#GeoData");
        let data = generateGeoJSONData();
        inputField.innerHTML = `${data}`;
        setGeoData(data);
    }

    function handleDisplay(e)
    {
        e.preventDefault();
        setShouldDisplayData(true);
    }

    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="GeoData">GeoJSON Input</label>
                    <br></br>
                    <textarea id="GeoData"></textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={handleGeneration}>Generate data</button>
                    <button type="submit" className="btn btn-primary" onClick={handleDisplay}>Display on Map</button>
                </div>
            </form>
        </>
    )
}
