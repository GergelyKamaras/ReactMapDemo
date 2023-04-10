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
    let type = geometry["type"];

    if (GeometryTypes.includes(type))
    {
        if (type === "Point")
        {
            return validatecoordinates(geometry["coordinates"]);
        }
        if (type === "MultiPoint" || type === "LineString")
        {
            return validateCoordinateArray(geometry["coordinates"]);
        }
        if (type === "MultiLineString")
        {
            geometry["coordinates"].forEach((e) => {
                if (!validateCoordinateArray(e))
                {
                    return false;
                }
            });
            return true;
        }
        if (type === "Polygon")
        {
            geometry["coordinates"].forEach((e) => {
                if (!validateCoordinateArray(e))
                {
                    return false;
                }
            });
            return true;
        }
    }
    return false;
}

function validateCoordinateArray(coordinateArray)
{
    coordinateArray.forEach(element => {
        if (!validatecoordinates(element))
        {
            return false;
        }
    });
    return true;
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
