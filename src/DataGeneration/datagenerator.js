import { CoordinateMaxValue, CoordinateMinValue } from "../Config";

export default function generateCoordinates()
{
    return [generateCoordinate(), generateCoordinate()];
}

function generateCoordinate()
{
    let coordinate = (Math.random() * (CoordinateMaxValue - CoordinateMinValue) + CoordinateMinValue);
    return coordinate;
}
