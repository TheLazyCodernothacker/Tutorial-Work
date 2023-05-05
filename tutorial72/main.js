{
    //object orriented javascript
    function User(name, interests){
        this //refers to the object being create
        this.interests = interests
        this.name = name
    }
    let me = new User('Caleb', "cooking");
    let you = new User('Camila', "hotwheels");
    console.log(me.you);
    me.membership = "Gold";
    console.log(me);
}