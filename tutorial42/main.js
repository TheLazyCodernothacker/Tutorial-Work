let grades = [1, 2, 0, 0, 0, 0, 10, 40];
grades.sort();
grades; //returns 0,0,0,0,1,10,2,40
grades.push(15, 13, 534, 65, 2, 4 , 2, 43, 64, 756, 34, 23, 3);
grades.sort(); //returns 0,0,0,0,1,10,13,15,2,2,23,3,34,4,40,43,534,64,65,756
grades.sort(function(a, b){return a-b}); //returns 0,0,0,0,1,2,2,3,4,10,13,15,23,34,40,43,64,65,534,756
grades.reverse();
grades; //returns 756,534,65,64,43,40,34,23,15,13,10,4,3,2,2,1,0,0,0,0
grades;
grades.fill(-1, 0, grades.length); //stops at grades.length, not for how many grades.length is
grades; 