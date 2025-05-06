//Explicit Declaration
let ExplicitName : string = "John Doe"

// ExplicitName = 33 Here it will give error because it will only take string value.

//Implicit Declaration
let ImplicitName : "John Doe"
// ImplicitName = 33 It will also give error because TS already guessed it as string , cannot accept any other parameter

//any
let anyword : any = 33;
anyword = "hello";
anyword = true;
//Here any allows to assign any data type without any error

//Unknown : it allows limited access , we can't assign unknown data types
let unknownWord : unknown = 1;
unknownWord = true; //Here no error
//We cannot assign value to another value in TS

// let neverWord : never = true;  Will give error always

//undefined and null
let undefinedWord : undefined = undefined;
let nullWord : null = null;


//Arrays

let strArr : string[] = [];
strArr.push("Akshat");
strArr.push("Ojasva");
// strArr.push(33) number will give error as it takes only string array input
console.log(strArr)


//ReadOnly
let rArray : readonly string[] = ["Johnny"];
// rArray.push("helena") will give error as it is readonly

//TypeInference in TS
let numbers = [1,2,3,4,5];
// numbers.push("6")  will give error as TS infered it as numbers
let head : number = numbers[0]
console.log(head);


//tuple 
let ourTuple : [number , boolean , string]
ourTuple = [42 , true , "hello"] //if any parameter is missing it will throw an error
ourTuple.push("Adding data"); //Data can be added here in tuple
ourTuple.pop() // Can be popped also
console.log(ourTuple) ;

//readonly tuple
let readonlyTuple : readonly [number , boolean , string] = [5 , true , "kaise ho"]
// readonlyTuple.push("helo")  //will give error here as it readonly Tuple


//Named Tuples
let namedTuple : [x : number , y : string] = [32 , "43"]

//Destructuring
const graphs: [number, number] = [25.6, 53.9];
const [x, y] = graphs;
console.log(x);


//Objects
const car : {name : string , model : string , year : number} = {
    name : "BMW",
    model : "X6",
    year : 1998
};
console.log(car)


//Optional Object in TS
const cars : {name : string , model ?: string , year ?: number} = {
    name : "BMW",
};
cars.model = "X6"
console.log(cars)


//Indexing object 
//Here we can define empty objects without giving within curly braces.
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Marco = "32" //it will give error here
nameAgeMap.marson = 32
console.log(nameAgeMap.Jack);


//Enums
//A group of constants whose value can't be changed
enum directions{ //this is defalt enums
    north,  //0
    south,  //1
    east,   //2
    west    //3
}
let currentDir = directions.south;
console.log(currentDir);
// currentDir = "North" //We cannot assign value here as it is already assosciated constant with enum

//Initialized enums
enum direction{ //this is defalt enums
    north  = 5,  //5
    south,  //6
    east,   //7
    west    //8
}
let currentDirection = direction.south;
console.log(currentDirection);


// Fully Initialized Enums
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  
  console.log(StatusCodes.NotFound);
  console.log(StatusCodes.Success);