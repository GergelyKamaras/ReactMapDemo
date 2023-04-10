import { useEffect } from "react";
import generateGeoJSONData from "../DataGeneration/datagenerator";
import validateGeoData from "../DataValidation/validateGeoData";

export default function GeoJSONInput({geoData, setGeoData, setShouldDisplayData})
{
    async function handleGeneration(e)
    {
        e.preventDefault();
        let inputField = document.querySelector("#GeoData");
        let data = generateGeoJSONData();
        inputField.value = `${data}`;
        setGeoData(data);
    }

    async function handleDisplay(e)
    {
        e.preventDefault();
        let inputField = document.querySelector("#GeoData");
        console.log(document.querySelector("#GeoData").value);
        await setGeoData(inputField.value);

        let isValid = false;
        try
        {
            isValid = validateGeoData(geoData);
        }
        catch (error)
        {
            console.log(error);
            alert("Input not in valid GeoJSON format!");
            return null;
        }

        if (isValid)
        {
            setShouldDisplayData(true);
        }
        else
        {
            alert("Invalid GeoJSON Data!");
        }
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
