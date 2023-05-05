{
    function User(){
        this.active = false;
    }
    User.prototype.sayHello = function(){
        return this.name = " says hi!"
    }
    function Student(name, major){
        this.name = name;
        this.major = major;
    }
    Student.prototype = new User();
    Teacher.prototype = new User();
    function Teacher(name, teaching){
        this.name = name;
        this.teaching = teaching;
        }
       
    let student = new Student('Peasant student','English');
    let teacher = new Teacher('Caleb Curry', ['math','science'])
    Teacher.prototype.sayHello = function(){
        return "Teacher say hi!";
    }
}
