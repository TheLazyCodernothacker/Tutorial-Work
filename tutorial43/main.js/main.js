grades = [20, 22, 39];
gradesB = [43, 12, 524, 34, 23]
let tacos = grades.concat(gradesB)
tacos; //returns 20,22,39,43,12,524,34,23
//push vs concat
//push adds to the end of the array and creates a new one and returns the length
//concat returns the new array, but it's not saved
grades + gradesB //returns 20,22,3943,12,524,34,23
//the + operator doesn't work with arrays because they turn them to strings, or treat them like them at least
grades //returns 20,22,39
grades.includes(22) //returns true
grades.includes(23) //returns false
grades.indexOf(22) //returns 1
grades.indexOf(23) //returns -1
grades.join() //returns 20,22,39
grades.join(',') //returns 20,22,39
grades = [12, 123, 323, 243, 545, 234, 5435, 23423, 2354234234234234]
grades.slice(3,5)  //returns 243,545