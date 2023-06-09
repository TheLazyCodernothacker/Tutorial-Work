{
    let x = 5; 
    x = 5.5; //numbers are 64 bit
    //the number you represent should be 100% accurate
    //you can store a number with a certain amount until bad stuff happens
    console.log(Number.MAX_SAFE_INTEGER);
    console.log(Number.MAX_SAFE_INTEGER);
    let y = 9007199254740994;
    console.log(Number.isSafeInterger(x));
    //returns false
    //infinity, negative infinity, and not a number
    let babies = 9007199254740994;
    console.log(Math.pow(babies,201) * 2);
    console.log(console.log + 12);
    //returns NaN
}