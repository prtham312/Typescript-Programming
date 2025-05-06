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