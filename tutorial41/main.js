{
    //we're in the console
    let grades = [1, 2, 3];
    grades.push(4);
    grades; //returns 1,2,3,4
    grades.pop(); //returns 4
    //let popperValue = grades.pop();
    //pop just removes the last element of the array
    grades.unshift(40); //returns 40,1,2,3
    grades.shift(); //returns 1
    grades.push(40,20,10,40);
    grades[3] = 40000;
    grades; //returns 1,2,3,40000,20,10,40
    grades.splice(2, 3) //returrns 3,40000,20
    grades.splice(2, 0, 5, 6, 7, 8) //returns []
    grades; //returns 1,2,5,6,7,8,10,40
    grades.splice(2, 4, 0, 0, 0, 0); //returns 5,6,7,8`)
}