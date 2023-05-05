{
    let password;
    //must be done outside of the code in the loop
    //let makes it so that the variable is only available in the scope and the scopes below it
    do {
        password = prompt("Enter your password");
    }while(password.toLowerCase !== "let me in");
}
{
    let list = [1, 3, 2, 4, 6, 7, 7, 3, 5]
    for (let i = 0; i < list.length; i++){
        console.log(list[i]);
    }
}
{
    let list = "Search this string baby";
    let charToSearch = "c";
    for (let i = 0; i < myString.Length; i++){
        if(myString[i] === charToSearch){
            console.log(`${myString[i]} is found at index ${i}`)
            
        }
    }
}