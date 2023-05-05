
{
    let paragraphs = document.getElementsByTagName('p')
    console.log(paragraphs)
    let paragraph = document.getElementsByTagName('p')[0]
    console.log(paragraph) //this doesn't show all of the children of p
    //when you make the p strong, this is shown as a child node
    //all node types as text have values.
    paragraphs[0].childNodes[0].nodeValue = 'Hello World'
    //this is how you change the text of a node
    // a button has an event listener just with onclick
    // there are many other ways to do this
    let list = document.getElementByTagName ('ol');
    console.log(list);
    let ourList = list[0];
    console.log(outList);
    ourList.onmouseover = function(){
        console.log('Mouse is over the list');
        oueList.childNodes[1].childNodes[0].nodeValue = "house"
    }
    //grabbing stuff with a number of the node is dangerous because changes in the html will destroy everything!
    //use IDs to be safe
    let button = document.getElementById('clickme')
    button.onmouseenter = function(){
        button.innherHTML = 'Revealed'
    }
    button.onmouseleave = function(){
        button.innerHTML = 'Hover Over Me'
    }
} 
