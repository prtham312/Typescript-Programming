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
ourTuple = [42 , true , "hello"]