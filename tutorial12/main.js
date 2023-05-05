let x = 10;
//differences between primitives and objects
//primitives don't change, they throw out the old value and throw in a new one
{
    let myName = "Caleb";
    myName =  myName.toUpperCase();
    console.log(myName);
}
{
    let myName = "Caleb";


    let yourName = new String("Claire");
    let age = newNumber();
    age.valueOf();
    console.log(typeof(myName));
    console.log(typeof(yourName));
}
//primitives do not have properties or methods, when you call a property or method onto it, it's being boxed as an object and is then converted back to a primitive.

