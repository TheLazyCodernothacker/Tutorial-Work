{
    let user = {
        active: true,
    };
    let student = {
        major: "English"
    }
    let teacher = {
        teaching: ['math', 'science'],
    };
    Object.setPrototypeOf(student, user);
    Object.setPrototypeOf(teacher, user);
    student.active = false; //overwrites the prototype of student
    console.log(teacher.active) //true
    console.log(student.active) //false no longer a prototype
}