//hoisting is confusing
//the two ways to declare a variable are hoisted differently
//hoisting is the idea that the code is scanned and then ran afterwards.
//so the code is read twice!
console.log(x); //undefined
var x = 10; 
//all functions are hoisted.a
function doStuff(){
    console.log("things");
}
//function declarations are not hoisted.
