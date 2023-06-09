
{
    let paragraphs = document.getElementsByTagName('p')
    console.log(paragraphs)
    let paragraph = document.getElementsByTagName('p')[0]
    console.log(paragraph) //this doesn't show all of the children of p
    //when you make the p strong, this is shown as a child node
    //all node types as text have values.
    paragraphs[0].childNodes[0].nodeValue = 'Hello World'
    //this is how you change the text of a node
} 
