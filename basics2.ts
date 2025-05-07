//Functions
function getTime() : number {
    return new Date().getFullYear();
}
console.log(getTime())

//void function 
// does not return anything
function sayHello() : void {
    console.log("kaise ho bhai log")
}
sayHello();

//Type Parameter functions
function multiply(a : number , b : number) : number {
    return a * b;
}
console.log(multiply(2,5))

//optional parameters
function addition(a : number , b: number , c ?: number) : number {
    return a + b + (c || 0)
}
console.log(addition(2,3));
console.log(addition(2,3,4));
// console.log (addition(1,2,"32")) //this will give error as it only accpets 

//Default Parameters
function power(value : number , exponent : number = 2) : number {
    return value * exponent;
}
console.log(power(2))