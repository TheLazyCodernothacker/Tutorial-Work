{
    //Element_Node is a node that represents an element
    //Text_Node is a node that represents a text in the node
    let list = document.getElementsByTagName('li');
    if(list[0].nodeType === 1){
        console.log('Element');
    } else if(list[0].nodeType === 3){
        console.log('Text');
    }
}