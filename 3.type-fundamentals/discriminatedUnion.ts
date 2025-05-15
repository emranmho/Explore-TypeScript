interface Circle{
    kind: "Circle",
    radious: number
}

interface Squre{
    kind: "Squre",
    sideLength: number
}


type Shape = Circle | Squre

function getArea(shape: Shape){
    switch(shape.kind){
        case "Circle":
            return Math.PI ** shape.radious
        case "Squre":
            return shape.sideLength **2
    }
}


// Define a Vehicle type using discriminated union.
// The type should have two possible shapes: car or truck.
// The car shape should have a numberOfDoors property.
// The truck shape should have a payloadCapacity property
// Write a function `describeVehicle` that accepts a Vehicle and returns a string describing the vehicle.
// The function should return "A car with X doors." for car shapes,
// "A truck with a payload capacity of Y." for truck shapes

type Vehicle = 
    | { kind: "car"; numberOfDoors: number }
    | { kind: "truck"; payloadCapacity: number }

function describeVehicle(value: Vehicle): string{
    switch(value.kind){
        case "car":
            return `A car with ${value.numberOfDoors} doors`;
        case "truck" :
            return `A truck with ${value.payloadCapacity} capicity`;
        default:
            let _ex: never = value;
            return _ex;
    }
}

// Test cases
const car: Vehicle = { kind: "car", numberOfDoors: 4 };
const truck: Vehicle = { kind: "truck", payloadCapacity: 2000 };

console.log(describeVehicle(car)); // Should print the description of the car
console.log(describeVehicle(truck)); // Should print the description of the truck