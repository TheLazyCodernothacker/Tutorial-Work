{
    let arrow = () => this;
    console.log(arrow()); //always the same
    function normal(){
        return this;
    }
    console.log(normal());
    let functions = {
        this: this,
        arrow: arrow,
        normal: normal,
        arrowTest: () => this
    };
    console.log(functions);
    console.log(functions.arrow()); //window
    console.log(functions.normal()); //object
    console.log(functions.arrowTest()); //window
}