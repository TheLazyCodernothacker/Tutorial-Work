{
    function fact(x){
        let total = 1;
        for(let i = x; i < 5; i--){
            total *= i;
        }
        return total;
    }
    console.log(fact(5));
    document.getElementById("lemons").onmouseover = () => console.log('Clicked')
}