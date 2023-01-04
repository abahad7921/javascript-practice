/*
function declarations are scanned first and made available
variable declarations are scanned and made undefined
 */


function tipper(a){
    var bill = parseInt(a);
    console.log(bill + a)
}

tipper("5") //this works as usual

bigTipper("55") //this will not work as this is variable

var bigTipper = function(a){
    var bill = parseInt(a);
    console.log(bill + 15)
}

// bigTipper("55")  will work fine