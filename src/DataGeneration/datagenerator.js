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
        default:
            break;
    }
    return JSON.stringify(data);
}

function pickType()
{
    let randomIndex = Math.floor(Math.random() * GeometryTypes.length);
    return GeometryTypes[randomIndex];
}

function generateCoordinateArray()
{
    let coordinates = [];
    let arrayLength = Math.floor(Math.random() * MaxElementsInArray);

    for (let i = 0; i < arrayLength; i++)
    {
        coordinates.push(generateCoordinatePair());
    }
    return coordinates;
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
