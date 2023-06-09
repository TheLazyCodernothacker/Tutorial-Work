{
    let grades = [[12, 13, 32, 43, 23],[12, 13, 32, 43, 23,54,23,42,34],[12, 13, 32, 43, 23]]
    outerLoop : for(let i = 0; i < grades.length; i++){
        console.log(i)
        for(let k = 0; k < grades[i].length; k++){
            console.log(grades[i][k])
            if(grades[i][k] === 54){
            console.log('found it')
            continue outerLoop;
            }
            console.log('asdfasdfasdf dont print this')
        }
        console.log('~~~~~~~~~~') //this code is ignored with the continue statement of outerloop
    }
    //this is where it will run after the break 
}