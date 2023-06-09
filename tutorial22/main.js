{
    let position = {
        x: 10,
        y: 20,
        print: function(){console.log(`X: ${this.x}, Y: ${this.y}`)}, //returns 10 and 20
        myObject: {sweetProperty: "Hello Friends"},
    }
    let myPosition = position;
    //if you reassign objects, it will change both variables
    console.log(position);
    console.log(myPosition);
    myPosition.x = 15;
    console.log(position);
    console.log(myPosition);
    // use 'this' to refer to the object
    //this has a lot of rules.
}
