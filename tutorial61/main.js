{
    function doStuff(input, input2){
        console.log(input, input2);
        console.log(this);
    };
    let args = [5,10]
    doStuff.call("hello", args);
}