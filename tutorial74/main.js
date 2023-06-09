{
    function User(name, interests){
        this.name = name;
        this.interests = interests
        //the function can waste memory because it's made every time!
        this.outputStuff = function(){
            console.log(this.name, this,interests)
        }
    }
    //now outputStuff is optional
    User.prototype.greet = function(){
        console.log(`My name is ${this.name}!`)
    }
    let me = new User("Caleb", ['cookings', 'eating', 'exercizing'])
    me.greet()
}