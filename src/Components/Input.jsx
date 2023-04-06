export default function Input({coordinates, setCoordinates})
{
    function updateMap(e)
    {
        e.preventDefault();
        let coordinate1 = parseFloat(document.querySelector("#coordinate1").value);
        let coordinate2 = parseFloat(document.querySelector("#coordinate2").value);
        setCoordinates([coordinate1, coordinate2]);
    }

    return(
        <form>
            <label htmlFor="coordinate1" >Coordinate 1</label>
            <input id="coordinate1" type="number" defaultValue={coordinates[0]}></input>
            <label htmlFor="coordinate1">Coordinate 1</label>
            <input id="coordinate2" type="number" defaultValue={coordinates[1]}></input>
            <button type="submit" onClick={updateMap}>Show!</button>
        </form>
    )
}
