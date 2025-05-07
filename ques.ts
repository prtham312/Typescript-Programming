{
    //Q1

    function values(value : number | string | boolean){
        if(typeof value === "number") return "number";
        else if(typeof value === "string") return "string";
        else if(typeof value === "boolean") return "bool";
        else return "Not a known type"
    }
    console.log(values(3));
    console.log(values("hello"));
    console.log(values(false));
}

{
//Q2 Create a function logMessage that accepts a parameter of type any and returns void. The function should log the parameter to the console.

    function log(message : string) : void {
        console.log(message);
    }
    log("this is for testing")
}

{
    //Q3 Declare a tuple userInfo with three elements: a string (name), a number (age), and a boolean (isActive). Initialize it with your details.
    let personTuple : [name : string , age : number , isActive : boolean]
    personTuple = ["Anik" , 21 , false]
    console.log(personTuple)
}

{
    //Q4 Define an array numbers that can only hold numbers. Initialize it with [1][2][3].
    let array : number[] = []
    array.push(3);
    console.log(array)
}

{
    //Q5 Create an interface Book with properties title (string), author (string), and pages (number). Then, create an object myBook adhering to this interface.
    interface book{
        title : string
        author : string
        pages : number
    }
    const myBook : book = {
        title : "Johnny Johnny",
        author : "Yesss Papa",
        pages : 2 ,
    }
    console.log(myBook)
}