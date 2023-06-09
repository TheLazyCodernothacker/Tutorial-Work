{
    let grades = [15, 4, 4, 66, 7, 9, 33, 4, 6, 43, 43, 43];
    grades.length = 30;
    grades[34] = 40;
    let count = 0;
    let total = 0;
    for(let i = 0;i < grades.length; i++){
        if(grades[i] !== undefined){console.log(grades[i]);
        count++;
        total += grades[i];
    }
    }
    console.log(`Average: ${total/count}`);
}
