import generateCoordinates from "../DataGeneration/datagenerator"

export default function GeoJSONInput()
{
    function handleGeneration(e)
    {
        e.preventDefault();
        let inputField = document.querySelector("#GeoData");
        let coordinates = generateCoordinates();
        inputField.innerHTML = `[${coordinates}]`;
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
                    <button type="submit" className="btn btn-primary">Display on Map</button>
                </div>
            </form>
        </>
    )
}
