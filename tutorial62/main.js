{
    function doStuff(input, input2){
        console.log(input, input2);
        console.log(this);
    }
    let newFunction = doStuff.bind('Hello', 5, 10);
    let me = {name: "Caleb"};
    doStuff.bind(me, 5, 10)
    newFunction();
}