{
}

function doSomething(){ //this is a constructor
    return 1 + 1;
}
t
let test = new doSomething()
//test is an object with the constructor prototype
//doSomething == object.constructor == doSomething
if(doSomething.prototype === Object.getPrototypeOf(test)){
    console.log('MATCH!!!')
}
{
    function Taco(){
        this.toppings = ['cheese'];
    }
    //created a function called make
    Taco.prototype.make = function(){
        console.log("Makng a taco...")
    }
    let myTaco = newTaco();
    //constructors share the object prototype
}