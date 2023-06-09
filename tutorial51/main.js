{
    function square(x){
        return x*x;
    }
    let x = 5;
    square(x);
    // arguments get copied and passed into the parameter
    // variables changed in the function don't change the original variable
    //primitives get copied
    //but objects are different...
    let y = {
        a: 5,
        b: 6
    }
    //if you change the object in a function, it changes the original object
    //this is because objects and the function share a memory
    //modding is different than changing
    //modding changes elements of an object
    function func(x){
        x.name = 'Sally';
    }
    let me = {name: "Caleb"};
    func(me);
    //returns Sally
}