//error handling is handling errors
//control flow
{
    try{
    doesntexist;
    } catch{
        console.log(e) //is executed with an error
    } finally{
        console.lot('test') //executes no matter what
    }
}
{
    function doSomething(){
        throw { error: "Tis broke", code: -1}
    }
    try{
        doSomething()
    } catch (e){
        console.log(e);
        console.log('Error!')
    } finally {
        console.log("Wrapping things up...")
    }
}