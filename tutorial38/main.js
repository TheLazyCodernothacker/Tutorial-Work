{
    let grades = [15, 4, 4, 66, 7, 9, 33, 4, 6, 43]
    for(let i = 0; i < grades.length; i++){
        if(grades[i] !== undefined) console.log(grades[i]);
    }
}
{
    let found = false;
    let search = 43;
    for(let i = 0; i < grades.length; i++){
        if(grades[i] === search){
            found = true;
            break;
        }
    }
}
{
    let largest = grades[0];
    for(let i = 1; i < grades.length; i++){
        if(grades[i] > largest) {
            largest.push(grades[i]);}
    }
}