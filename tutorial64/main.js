{
    function cube(x){
        return x*x*x;
    }
    console.log(cube(5));
    let cubeArrow = x => {
        console.log('calculating...');
        return x*x*x;
    }
    console.log(cubeArrow(5));
    // parenthesis are used for 0 parameters or two or more parameters
}