export default function Navigate({coordinates, setCoordinates, setShouldCenterView})
{
    function updateMap(e)
    {
        e.preventDefault();
        let coordinate1 = parseFloat(document.querySelector("#coordinate1").value);
        let coordinate2 = parseFloat(document.querySelector("#coordinate2").value);
        setCoordinates([coordinate1, coordinate2]);
        setShouldCenterView(true);
    }

    return(
        <form>
            <h3>Navigate to coordinates</h3>
            <div className="form-group">
                <label htmlFor="coordinate1" >Latitude</label>
                <br></br>
                <input id="coordinate1" type="number" defaultValue={coordinates[0]}></input>
            </div>
            <div className="form-group">
                <label htmlFor="coordinate1">Longitude</label>
                <br></br>
                <input id="coordinate2" type="number" defaultValue={coordinates[1]}></input>
            </div>
            <div className="form-group">
                <button type="submit" onClick={updateMap} className="btn btn-primary">Go to Coordinates!</button>
            </div>
        </form>
    )
}
