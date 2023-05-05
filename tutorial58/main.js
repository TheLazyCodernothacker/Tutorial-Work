{
    //javascript has no overloading
    function pow(x, y, ...extra){ //default value
        /*if(y === undefined){
            y = 2;
        }*/
        //y = typeof y === 'undefined' ? 2 : y;
        console.log(this);
        console.log(arguments);
        console.log(extra);
        let total = 1;
        for(let i = 0; i < y; i++){
            total *= x;
        }
        function largest(x, ...extra){
            let largest = x;
            for(let i = 0; i < extra.length; i++){
                if(extra[i] > largest){
                    largest = extra[i];
                }else{
                    console.log(`${largest} is number one!`)
                }
            }
            return largest;
        }
        console.log(largest(),2345,345,63,45,435634,52345,34,3,5,5456,3456,)
    }
}