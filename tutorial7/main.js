//console:
var age = 5;
dogs = 30
window;
//window is the global scope
//create variables in functions to avoid interruption with website
(function(){
    //IIFE -  immediately invoked function expression
    var age = 5;
   //if no var then it thinks age was never defined and it's global scope 
})();
