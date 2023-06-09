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
        sayHello: function(){
            let message = this.name + ' teaches. ';
            this.teaching.forEach(function(e){
                message+= e + ' '
            })
            return message
        }
    };
    Object.setPrototypeOf(student, user);
    Object.setPrototypeOf(teacher, user);
    
    student.active = false; //overwrites the prototype of student
    
    let newMembers = [teacher, student];

    newMembers.forEach(function(e){
        console.log(e.sayHello)
    });
    console.log('Name in teacher? ', teacher.hasOwnProperty('active')); //false, because it's only in the prototype
    console.log('Name in teacher? ', teacher.name !== undefined) //true
}