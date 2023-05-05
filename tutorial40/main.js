{
    let grades = [];
    while(true){
        let input = prompt('Add a grade!');
        if(input === "q"){
            break;
        }
        if(typeof(parseInt(input)) !== "number"){
            alert("Please enter a number!");
            continue;
        }
        grades.push(Number(input));
    }
}