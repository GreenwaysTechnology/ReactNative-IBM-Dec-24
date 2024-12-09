//let is keyword
//a is variable
//10 is literal
let a = 10

//function as value
//let is keyword
//hello is just still variable
//function(){} is just value
//anonymous function
let hello = function () {
    console.log('hello')
}
hello()
//anonymous function args,parameters,return value

let add = function (a = 0, b = 0) {
    return a  + b 
}
console.log(add(10,10))
console.log(add(20,30))
console.log(add())

