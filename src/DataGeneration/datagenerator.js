import { CoordinateMaxValue, CoordinateMinValue } from "../Config";

export default function generateGeoJSONData()
{
    let data = {
        "type" : "Feature",
        "geometry" : {
            "type" : "Point",
            "coordinates" : generateCoordinates()
        }
    };
    return JSON.stringify(data);
}

function generateCoordinates()
{
    return [generateCoordinate(), generateCoordinate()];
}

function generateCoordinate()
{
    let coordinate = (Math.random() * (CoordinateMaxValue - CoordinateMinValue) + CoordinateMinValue);
    return coordinate;
}
