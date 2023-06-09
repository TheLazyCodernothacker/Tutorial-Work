{
    let name = prompt("What is your name?");
    if(name === "Claire") console.log("Hello")
    //only the first line is associated with the if statement
    //the rest of the code is not    
}
{
    let name = prompt("What is your name?");
    if(name === "Claire")
        console.log("Hello");
        console.log("This will happen no matter what");
}