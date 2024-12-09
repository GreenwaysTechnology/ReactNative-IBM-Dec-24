//function as parameter
function add(a, b) {
    return a + b
}
//we are passing hardcoded value
console.log(add(10, 10))

//we are passing via variables
let x = 10;
let y = 20
console.log(add(x, y))

//how to pass function as parameter: hof

//resolve is just variable, to this variable we pass function as parameter
function fetchData(resolve) {
    resolve('products')
}
let getProducts = function (message) {
    console.log(message)
}
fetchData(getProducts)

fetchData(function (message) {
    console.log(message)
})
//arrow and hof 

let fetchMyData = resolve => resolve('customers')

let getCustomers = message => console.log(message)
fetchMyData(getCustomers)

// fetchData((message) => {
//     console.log(message)
// })
// fetchData(message => {
//     console.log(message)
// })
fetchMyData(message => console.log(message))



