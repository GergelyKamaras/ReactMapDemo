export default function GeoJSONInput()
{
    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="GeoData">GeoJSON Input</label>
                    <br></br>
                    <textarea id="GeoData"></textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Generate data</button>
                    <button type="submit" className="btn btn-primary">Display on Map</button>
                </div>
            </form>
        </>
    )
}
