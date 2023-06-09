{
    var favFood = "tacos";
    console.log(favFood.charAt(0)) //result: t
    console.log(favFood.concat(" are totes lit"))
    console.log(favFood + "are totes lit")
    console.log(favFood.concat("hey", "test", " "));
    let content = "Today we'll be talking about string methods and how fun they are;";
    let search1 = "string"
    let search2 = "number"
    console.log(content.includes(search1));
    console.log(content.indexOf(search1))//29
    console.log(content.indexOf(search2))//-1
    console.log(content.indexOf('a', content.indexOf('a')+1))
    console.log(content.lastIndexOf('a'))
}