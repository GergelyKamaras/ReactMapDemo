import { LatitudeMaxValue, LatitudeMinValue, GeometryTypes, MaxElementsInArray, LongitudeMaxValue, LongitudeMinValue } from "../Config";

export default function generateGeoJSONData()
{
    let type = pickType();

    let data = {
        "type" : "Feature",
        "geometry" : {
            "type" : `${type}`
        }
    }

    switch (type){
        case "Point":
            data["geometry"]["coordinates"] = generateCoordinatePair();
            break;
        case "MultiPoint":
            data["geometry"]["coordinates"] = generateCoordinateArray();
            break;
        case "LineString":
            data["geometry"]["coordinates"] = generateCoordinateArray();
            break;
        case "MultiLineString":
            data["geometry"]["coordinates"] = generateArrayOfCoordinateArrays();
            break;
        case "Polygon":
            data["geometry"]["coordinates"] = generatePolygonCoordinates();
            break;
        case "MultiPolygon":
            data["geometry"]["coordinates"] = generateMultiPolygonCoordinates();
            break;
        default:
            break;
    }
    return JSON.stringify(data);
}

function generateMultiPolygonCoordinates()
{
    let coordinates = [];
    let numberOfPolygons = generateRandomNum(2, MaxElementsInArray);

    for (let i = 0; i < numberOfPolygons; i++)
    {
        coordinates.push(generatePolygonCoordinates());
    }

    return coordinates;
}

function generatePolygonCoordinates()
{
    let coordinates = [];

    let arrayLength = generateRandomNum(3, MaxElementsInArray)

    for (let i = 0; i < arrayLength; i++)
    {
        coordinates.push(generateCoordinatePair());
    }

    coordinates.push(coordinates[0]);
    return [coordinates];
}

function pickType()
{
    let randomIndex = generateRandomNum(0, GeometryTypes.length - 1);
    return GeometryTypes[randomIndex];
}

function generateArrayOfCoordinateArrays()
{
    let numberOfArrays = generateRandomNum(2, MaxElementsInArray);
    let coordinates = [];

    for (let i = 0; i < numberOfArrays; i++)
    {
        coordinates.push(generateCoordinateArray());
    }

    return coordinates;
}

function generateCoordinateArray()
{
    let coordinates = [];

    let arrayLength = generateRandomNum(2, MaxElementsInArray)

    for (let i = 0; i < arrayLength; i++)
    {
        coordinates.push(generateCoordinatePair());
    }
    return coordinates;
}

function generateRandomNum(min, max)
{
    let randomNum = Math.floor(Math.random() * (max + 1));
    return Math.max(min, randomNum);
}

function generateCoordinatePair()
{
    return [generateLongitude(), generateLatitude()];
}

function generateLongitude()
{
    let longitude = (Math.random() * (LongitudeMaxValue - LongitudeMinValue) + LongitudeMinValue);
    return longitude;
}

function generateLatitude()
{
    let latitude = (Math.random() * (LatitudeMaxValue - LatitudeMinValue) + LatitudeMinValue);
    return latitude;
}
