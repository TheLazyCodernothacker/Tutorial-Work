{
    let me = {
        name: "Caleb",
        outputMe: outputMe
    }
    function outputMe(){
        console.log(this);
    }
    function outputMeStrict(){
        "use strict";
        console.log(this);
    }
    function Person(){
        console.log(this);
        this.name = "Caleb";
        console.log(this);
    }
    me.outputMe(); //me
    outputMe(); //window
    outputMeStrict(); //undefined, function strict mode
    let person = new Person(); //Person
}