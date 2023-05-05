{
    //functions are first class citizens and can be used as variables and everything else
    //functions are objects and created equally :)
    //functions are building blocks of javascript
    //a callback function is a function that is passed as an argument to another function
    //a callback function is called after the parent function has completed its execution
    function doSomething(x){
        return x(); //returns what x() would return
    }
    let myFunc = () => { 5*5 };
    doSomething(myFunc);
}
{
    let doSomething = function(){
        console.log("Hello World");
    }
    setTimeout(doSomething, 2000);
}
//new video but same tutorial
{
    let myFunc = function (x, y){
        let total = 1;
        for(let i = 0; i < y; i++){
            total *= x;
        }
        return total;
    }
    console.log(myFunc(3,3))
    
}