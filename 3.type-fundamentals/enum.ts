enum Color{
    Red,
    Green,
    Blue,
}

enum ColorComputed {
    Red = "red".length,
    Green = "green".length,
}

function printColor(color: Color){
    console.log(color);
}

printColor(Color.Blue);


// Consider using a const object instead of an enum
const Colors = {
  Red: "red",
  Green: "green",
  Blue: "blue",
} as const;

// To pass a list of colors to a function, use keyof typeof
function printColors(color: keyof typeof Colors) {
  console.log(color);
}

printColors("Red");

 









// 1. Define an enum called Direction with four possible values: Up, Down, Left, Right
enum Direction{
    Up,
    Down,
    Left,
    Right
}
// 2. Create a function called `move` that takes a Direction enum as an argument and uses a switch to return a corresponding string like "Moving up!"
function move(move: Direction): string{
    switch(move){
        case Direction.Up:
            return "Moving up";
        case Direction.Down:
            return "Down"
        case Direction.Left:
            return "Left"
        case Direction.Right:
            return "Right"
        default:
             return "Unknown"
    }
}
// 3. Define an enum called Status with explicit values: Success = 1, Failure = -1, Pending = 0
enum Status{
    Success = 1,
    Failure = -1,
    Pending = 0
}
// 4. Create a function called getStatusMessage that accepts the Status enum as an argument and returns a corresponding message like "Operation was successful! or "Operation failed!"

// 5. Implement the same feature, but this time use a object literal instead of an enum
const StatusLiteral = {
    Success: 1,
    Failure: -1,
    Pending: 0
} as const
// 6. Create a function called getStatusMessageLiteral that accepts the statusLiteral as an argument and returns a corresponding message
function getStatusMessageLiteral(status: keyof typeof StatusLiteral): string {
  switch (status) {
    case "Success":
      return "Operation was successful!";
    case "Failure":
      return "Operation failed!";
    case "Pending":
      return "Operation is pending!";
    default:
      return "Unknown status!";
  }
}