{
    //similarites should be prototypes
    //default traits should be prototypes
    let user = { //what student and teacher share
        active: true,
        sayHello: function(){
            return this.name + " says hi!"
        }
    };
    let student = {
        name: "Peasant student",
        major: "English"
        //active here because it can change easily
    }
    let teacher = {
        name: "Caleb Curry",
        teaching: ['math', 'science'],
    };
    Object.setPrototypeOf(student, user);
    Object.setPrototypeOf(teacher, user);
    
    student.active = false; //overwrites the prototype of student
    
    console.log(teacher.active) //true
    console.log(student.active) //false no longer a prototype
    console.log(student.sayHello())
}