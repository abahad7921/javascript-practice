/*
undefined
null
0
NaN (not a number)

all of them are falsy values
*/

var user = null

if(user){
    console.log("true condition hit")
} 

console.log(2 + 2) //4
console.log(2 + "2") //22

//if any of the operand is string then it just appends to the string

var a = "2"

if(2 == a){
    console.log("type coercion hit")
}

//to avoid this situation === is used

if("2" === a)
{
    console.log("type coercion avoided")
}


