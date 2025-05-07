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