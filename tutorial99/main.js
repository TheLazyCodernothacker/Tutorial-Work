{
    let button = document.getElementById('button');
    button.onclick = function(){
        let node  = document.createElement('li')
        console.log(node);
        node.appendChild(document.createTextNode(document.getElementById('input').value))
        console.log(node);
        let list = document.getElementById('items');
        list.appendChild(node); //updates the list

    }
}