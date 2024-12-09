//es 5 anonymous function
let add = function (a, b) {
    let c = a + b
    console.log('c ' + c)
}
add(10, 10)

//es 6 arrow function
let hello = () => {
    console.log('hello')
}
hello()
//if function has only one line of code, we have to remove {}
hello = () => console.log('hello')
hello()

//arrow version
add = (a, b) => {
    let c = a + b
    console.log('c ' + c)
}
add(10, 10)

//return value
add = (a, b) => {
    return a + b
}
console.log(add(10, 10))
//only return value: we can remove {} and return statement
add = (a = 0, b = 0) => a + b

console.log(add(10, 10))

//single arg, without default value, and return the same

// let getStock = function(value) {
//     return value 
// }

let getStock = value => value
console.log(getStock(10))