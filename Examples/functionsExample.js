function foo(){
    let bar = "Hello World";
    return bar;
}

console.log(foo()); //prints "Hello World"
console.log(foo); //prints "[Function: foo]"
console.log(foo.toString()); //prints lines 1-3