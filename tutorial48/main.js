{
    let myDate = new Date();
    console.log(myDate); //current date
    //the month is 0 based and numbers over 11 will loop
    //date starts at unix epoch time
    let start = Date.now();
    console.log(myOtherDate);
    prompt();
    prompt();
    let end = Date.now();
    console.log(end - start);

}
{
    let before = newDate(2020, 10, 15);
    let after = new Date(2020, 10 , 20)
    let days = after - before;
    let oneDay = 1000 * 60 * 60 * 24;
    console.log(days/oneDay);
}