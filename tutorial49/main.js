{
    let myDate = Date.parse('12 Jan 1995 00:15:54 GMT');
    console.log(myDate) // 794985454000
    //there are lots of things with strings, and they don't work for all browsers
    let otherDate = new Date(2012, 11, 15, 10, 10, 10);
    console.log(otherDate) // Sat Dec 15 2012 10:10:10 GMT-600 (CST)
    let actualDate = new (Date.UTC(Date(2012, 11, 15, 10, 10, 10)));
    consolelog(myDate.getMonth()); // 0
}
{
    //setters
    let myDate = newDate(2012, 10, 12);
    myDate.setHours(12); // 12:00:00
    console.log(myDate.getTimezoneOffset()/60); //returns flipped value, cuz idk
}