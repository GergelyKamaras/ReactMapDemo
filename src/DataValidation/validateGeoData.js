import { LatitudeMinValue, LatitudeMaxValue, GeometryTypes, LongitudeMinValue, LongitudeMaxValue } from "../Config";

export default function validateGeoData(input)
{
    let data = JSON.parse(input);
    if (data["type"] === "Feature")
    {
        return validateFeature(data);
    }
    if (data["type"] === "FeatureCollection")
    {
        return validateFeatures(data["features"]);
    }
}

function validateFeatures(features)
{
    features.forEach((feature) => {
        if (!validateFeature(feature))
        {
            return false;
        }
    })
    return true;
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
        if (type === "MultiLineString" || type === "Polygon")
        {
            return validateArrayOfCoordinateArrays(geometry["coordinates"]);
        }
        if (type === "MultiPolygon")
        {
            return validateMultiPolygonCoordinates(geometry["coordinates"]);
        }
    }
    return false;
}

function validateMultiPolygonCoordinates(multiPolygonCoordinates)
{
    multiPolygonCoordinates.forEach((polygonCoordinates) =>
    {
        if (!validateArrayOfCoordinateArrays(polygonCoordinates))
        {
            return false;
        }
    })
    return true;
}

function validateArrayOfCoordinateArrays(arrayOfCoordinateArrays)
{
    arrayOfCoordinateArrays.forEach((coordinateArray) => {
        if (!validateCoordinateArray(coordinateArray))
        {
            return false;
        }
    });
    return true;
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
    if (LongitudeMinValue <= coordinates[0] &&
        coordinates[0] <= LongitudeMaxValue &&
        LatitudeMinValue <= coordinates[1] &&
        coordinates[1] <= LatitudeMaxValue)
    {
        return true;
    }

    return false;
}
