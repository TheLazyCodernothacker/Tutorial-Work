{
    function pow(x, y){
        let total = 1;
        for(let i = 0; i < y; i++){
            total *= x;
        }
        return total; 
    }
    let coolFunctions = [pow];
    console.log(coolFunctions[0](3,3)) // 27
    let mathFunctions = {
        power: pow
    };
    console.log(mathFunctions.power(3,3))// 27
    pow.descriptions = "This function raises a number to a power";
    console.log(pow.descriptions) // This function raises a number to a power
    function callbackExample(callback){
        return callback(3,5)
    }
    console.log(callbackExample(pow))
    function returnAFunction(func){
        return func;;
    }
    console.log(returnAFunction()(10,3))
}