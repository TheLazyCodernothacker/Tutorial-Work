{
    let name = prompt("What is your name?");

    switch(name){
        case "Caleb":
            console.log("Welcome!");
            break;
        case "Claire":
            console.log("Get outta here!");
            break;
        default:
            console.log("I guess you're welcome...");
            break;//use breaks to prevent overlapping and fallthrough
    }
    {
        switch (name){
            case "Caleb":
            case "Claire":
                console.log("Get outta here!");
                break;
            default:
                console.log("I guess you're welcome...");
                break;
            }
    }
}
