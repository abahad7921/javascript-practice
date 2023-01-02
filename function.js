//basic function declaration

function greetUser(user){
    console.log(`good evening ${user}`)
}

greetUser("ahad")

//how to return from functions?

function namasteUser(user){
    return `namaste ${user}`
}

// console.log(namasteUser("ahad"))

//you can also write the above function body as follows

var namasteUser = function(user){
    return `namaste ${user} from second function`
}

console.log(namasteUser("asad"))