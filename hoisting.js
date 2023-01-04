/*
function declarations are scanned first and made available
variable declarations are scanned and made undefined
 */


function tipper(a){
    var bill = parseInt(a);
    console.log(bill + a)
}

tipper("5") //this works as usual

// bigTipper("55") //this will not work as this is variable

var bigTipper = function(a){
    var bill = parseInt(a);
    console.log(bill + 15)
}

// bigTipper("55")  will work fine

var name = "Abdul Ahad"

function sayName(){
    var name = "MD Asad"
    console.log(name)
}

sayName()

console.log(name)

/**
 in this example the second execution context window loads up for sayName() function
 in the second context name is overriden to MD asad
 and when the function call ends then the execution context loads off
 and the name is undo to Abdul Ahad
 */