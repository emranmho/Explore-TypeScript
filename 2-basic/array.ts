const numbers: number[] = [1,2,3,4];

//generic type
const numbers2: Array<Number> = [1,2,3,4];

//tuple type
const tuple: [number, string] = [1, "hello"]

//mixed type array
const tupple2: Array<number | string> = [1, "hello", 2, "world"]

//fixed length array
const fixedLength: [number, number, number] = [1,3,4]

type CarsColor = ["red", "green"]
type SkyColor = ["blue", "white"]
type CarsAndSkyColor = [...CarsColor, ...SkyColor]

// Exercise: Typing Arrays in TypeScript

// 1. Declare an array of numbers called `ages` and initialize it with the values 25, 30, 35, and 40.

// 2. Declare an array of strings called `names` and initialize it with the values "Alice", "Bob", and
// "Charlie".

// 3. Declare a tuple called `product` that contains a string and a number.
// Initialize it with the values "Boat" and 25.

// 4. Declare an array of tuples called `coordinates` where each tuple contains two numbers (x and y).
//    Initialize it with the following values:
//    - (10, 20)
//    - (30, 40)
//    - (50, 60)

// 5. Use the spread syntax to combine the two array types below into a new array type called `combined`.
type Continents = ["Europe", "Africa"];
type Oceans = ["Pacific", "Atlantic"];

//1
let ages: number[] = [25, 30, 35,40]

//2
let names: string[] = ["Alice", "Bob", "Charlie"]

//3
let product: [string, number] = ["Boat", 25]

//4
const coordinates: [number, number][] =[
    [10,20],
    [30,40],
    [50,60]
]

//5
type combined = [...Continents, ...Oceans]
