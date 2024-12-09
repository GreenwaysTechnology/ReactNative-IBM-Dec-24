function sayHello(name) {
    console.log(`Hello ${name}`)
}
sayHello('Subramanian')
sayHello()

function multiply(a = 0, b = 0) {
    let c = a * b
    console.log(`a ${a} b ${b} c ${c}`)
}
multiply(10, 10)
multiply()

//return value
function add(a = 0, b = 0) {
    return a + b
}
console.log(add(10, 10))
console.log(add())