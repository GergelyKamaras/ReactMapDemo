import { CoordinateMinValue, CoordinateMaxValue, GeometryTypes } from "../Config";

export default function validateGeoData(input)
{
    let data = JSON.parse(input);
    if (data["type"] === "Feature")
    {
        return validateFeature(data);
    }
}

function validateFeature(feature)
{
    let geometry = feature["geometry"];

    if (GeometryTypes.includes(geometry["type"]))
    {
        if (geometry["type"] === "Point")
        {
            return validatecoordinates(geometry["coordinates"]);
        }
        if (geometry["type"] === "MultiPoint")
        {
            geometry["coordinates"].forEach(element => {
                if (!validatecoordinates(element))
                {
                    return false;
                }
            });
            return true
        }
    }
    return false;
}

function validatecoordinates(coordinates)
{
    if (CoordinateMinValue <= coordinates[0] &&
        coordinates[0] <= CoordinateMaxValue &&
        CoordinateMinValue <= coordinates[1] &&
        coordinates[1] <= CoordinateMaxValue)
    {
        return true;
    }

    return false;
}
