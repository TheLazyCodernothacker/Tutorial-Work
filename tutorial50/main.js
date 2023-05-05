{
    //functions!!!
    //functions can be a way to assign code to a function
    //functions can have an input and/or an output
    //or they can just do something without an input, so it's not dynamic
    function square(x){
        return x*x;
    }
    //this doesn't make to much sense, because there's not much that's being done.
    //things being past in are arguments, parameters are in the function declaration
    //arguments get passed into parameters
    //when you pass in more arguments than parameters, the extra arguments are ignored
    //no arguments are passed in, the parameters are undefined
    //function overloading is when you have multiple versions of a function, but this doesn't work in javascript
    //function overloading is sad :(
    //javascript functions are first class objects, which means they can be passed around like any other object
    //functions can be assigned to variables
    let square2 = function(x){
        //you can rewrite this as an arrow function
        /*
        let square2 = (x) => {
            return x*x;
        }
        */
        return x*x;
    }
    //functions can be passed as arguments to other functions
}   