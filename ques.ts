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