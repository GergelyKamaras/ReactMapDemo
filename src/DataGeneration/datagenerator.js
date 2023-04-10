import { CoordinateMaxValue, CoordinateMinValue, GeometryTypes, MaxElementsInArray } from "../Config";

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
        default:
            break;
    }
    return JSON.stringify(data);
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
    return [generateCoordinate(), generateCoordinate()];
}

function generateCoordinate()
{
    let coordinate = (Math.random() * (CoordinateMaxValue - CoordinateMinValue) + CoordinateMinValue);
    return coordinate;
}
