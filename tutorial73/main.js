{
    //object orriented javascript
    function User(name, interests){
        this //refers to the object being create
        this.interests = interests
        this.name = name
    }
    function newUser(name, interests){
        let person = {
            name : name,
            interests: interests,
        }
        return person;
    }
    let me = new User('Caleb', "cooking");
    let you = new User('Camila', "hotwheels");
    console.log(me.you);
    me.membership = "Gold";
    console.log(me);
    let 
}