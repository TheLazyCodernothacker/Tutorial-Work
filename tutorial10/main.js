(function(){
    //IIFE - immediately invoked function
    var age = 5;    
})();

var y = 10;
//Great way to prevent global variables
//let works the same way, but the benefit of let is that in a block scope it will hide itself, not only in an IIFE
//let and const are recommened 
{
    //block
    let y = 10;
    const x = 20;

    console.log(y, x);
    var z = 100 // defeats the purpose of blocks
}
//new area
{
    //block
    let y = 10;
    const x = 20;
    {
        let y = 6;
        console.log(y)
    }
    console.log(y);
    var z = 100;
}


