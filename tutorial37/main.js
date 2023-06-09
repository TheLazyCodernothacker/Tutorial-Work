{
    let grades = [12, "c", function(){console.log("hello")}];
    console.log(grades[1]) //this will print the whole array
    grades[0] = 12;
    grades[1] = 43;
    grades[40] = 2;
    console.log(grades[40]) //this will print the whole array and lots of empty elements
    for (let i = 0; i < grades.length; i++){
        console.log(grades[i]);
    }
    //you can crop an array with the length property too
    grades.length = 30000; //how to break a program
}