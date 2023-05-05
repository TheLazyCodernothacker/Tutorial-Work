{
let list = "Search this string baby";
let charToSearch = "c";
for (let i = 0; i < myString.Length; i++){
    if(myString[i] === charToSearch){
        console.log(`${myString[i]} is found at index ${i}`)
        break; //breaks out of the loop
    }
}
}
{
    let list = "Search this string baby";
    let charToSearch = "c";
    for (let i = 0; i < myString.Length; i++){
        if(myString[i] === 'a' || myString[i] === 'e' || myString[i] === 'i' || myString[i] === 'o' || myString[i] === 'u'){
            continue; //continues the loop            
        }
        console.log(myString[i])
    }
}
    
