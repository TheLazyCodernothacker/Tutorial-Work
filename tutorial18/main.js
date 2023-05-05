{
    let x = 5;
    x. //other crap appears
    Number //other crap appears
    //number is a structure is a constructor and is a function which is an object that has properties
    let y = new Number(10)
    y //result Number {10} _proto__: Number [[PrimitiveValue]]: 10
    let z = 595959595959 
    console.log(x.toExponential(10)); //result is 5.959595959596e+11 
    console.log(x.toFixed(2))//goes to the 2nd place behind the decimal point
    console.log(x.toLocaleString()); //adds commas to the number
    console.log(x.toPrecision(2)) //shows all of the significant digits
}
{
    var abs = Math.abs(-36); //36
    var goUP = Math.ceil(.00000001) //1
    var goDown = Math.floor(0.99999) // 0
    var roundUp = Math.round(4.9)//5
    var roundDown = Math.round(5.1)//5
    var isPositive = Math.sign(-Infinity);//-1 (false)
    var getInt = Math.trunc(4.99999)//4
}