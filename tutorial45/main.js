{
    let grades = [[12, 13, 32, 43, 23],[12, 13, 32, 43, 23],[12, 13, 32, 43, 23]]
    /*for(let i = 0; i < grades.length; i++){
        console.log(i)
        for(let k = 0; k < grades[i].length; k++){
            console.log(grades[i][k])
        }
        console.log('~~~~~~~~~~')
    }*/
    grades.forEach(
        function(row){
            row.forEach(function(element){
                console.log(element)
            }
            )
        }
    )
} 
