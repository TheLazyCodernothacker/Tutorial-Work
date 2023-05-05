{
    function normal(){
        return this;
    }

    let arrow = () => this;
    let newFunc = arrow.bind("hello") //does not change 'this'
    console.log(newFunc());
    console.log(normal.bind("this")())
}