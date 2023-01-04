sayHello()

function sayHello(){
    console.log("hello");
}

//here you can see context of the function sayHello
//the above statement will run fine as usual

if(2 === 2){
    console.log("this is true")
}

var myName = "Abdul Ahad"

if(myName === myName){
    console.log("this is a true statement")
}

//this will work as usual

if(myName === window.myName){
    console.log("this is again a true statement")
}

//this will produce an error as the current context is node not the global context

