let func = x => x*x; //no return keyword nor curly braces
function x(){
    return expression;
}
func(5); //25
let func2 = (x, y) =>{ 
    return x*y; //arrow functions make 'this' always to the same and are predictable
}