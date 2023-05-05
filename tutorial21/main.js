{
    let content = "Today we'll be talking about string methods and how fun they are";
    console.log(content.substring(6, 11))
    console.log(content.substr(6, 5))
    console.log(content.slice(6, 11))
    console.log(content.toUpperCase())
    console.log(content.toLowerCase())
    console.log(content.trim());
    console.log(content.trimLeft)
    console.log(content.trimRight)
    console.log(content.trimEnd)
    let waiting = "tick tock ";
    console.log(waiting.repeat(4000))
    console.log(content.split(" "))
}
{
    function collatz(n) {
        if (n === 1) {
            return 1;
        } else if (n % 2 === 0) {
            return collatz(n / 2);
        } else {
            return collatz(3 * n + 1);
        }
    }
    console.log(collatz(3))
}
