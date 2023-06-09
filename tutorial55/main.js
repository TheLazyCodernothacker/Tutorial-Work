{
    console.log(x); //undefined *not* a reference error
    var x = 10;
    doStuff(); //error, doStuff is not a function
    var doStuff = function (){
        console.log('Hey!')
    }
    //let and const variables can never be used before initialization
}