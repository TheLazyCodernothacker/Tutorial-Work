{
    let slicesOfPizza = 10;
    let newPizza = slicesOfPizza++;
    slicesOfPizza++; //++slicesOfPizza
    console.log("slicesOfPizza ", slicesOfPizza);
    console.log("newPizza ", newPizza);
    //++ happens before declarations if placed to the left
}
{
    let slicesOfPizza = 10;
    slicesOfPizza *= 5;
    console.log(slicesOfPizza)
}