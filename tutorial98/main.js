//<input>s can have any attributes and can be found in the dom
//it's not an element, it's a node that's not any of the actual elements
//This is not in the child nodes.
document.getElementById('input').value = '!!!';
//this is how you change the value of an input
document.getElementById('tacos').hasAttribute('id');
//this is how you check if an element has an attribute
console.log(document.getElementById('tacos').attributes);
//attributes will be seen as lower case. These are not case sensitive.