{
    let arrow = () => this;
    console.log(arrow()); //always the same
    function normal(){
        return this;
    }
    console.log(normal());
    let functions = {
        arrow: arrow,
        normal: normal,
    };
    console.log(functions); //object
    console.log(functions.arrow()); //window
    console.log(functions.normal()); //object
}