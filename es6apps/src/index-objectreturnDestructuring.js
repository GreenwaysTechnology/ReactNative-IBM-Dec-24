
// function getStockValues() {
//     return {
//         id: 1,
//         symbol: 'google',
//         qty: 100,
//         price: 2500
//     }
// }
// console.log(getStockValues())


//without destructuring
// function getStockValues(id, symbol, qty, price) {
//     return {
//         id: id,
//         symbol: symbol,
//         qty: qty,
//         price: price
//     }
// }
// function getStockValues(id, symbol, qty, price) {
//     return {
//         //right:left keys are same, make it one
//         id,
//         symbol,
//         qty,
//         price
//     }
// }
// function getStockValues(id = 1, symbol = 'OpenApi', qty = 100, price = 25000) {
//     return {
//         //right:left keys are same, make it one
//         id,
//         symbol,
//         qty,
//         price
//     }
// }
// const getStockValues = (id = 1, symbol = 'OpenApi', qty = 100, price = 25000) => {
//     return {
//         id,
//         symbol,
//         qty,
//         price
//     }
// }
const getStockValues = (id = 1, symbol = 'OpenApi', qty = 100, price = 25000) => ({
    id,
    symbol,
    qty,
    price
})

console.log(getStockValues(1, 'google', 100, 2500))
console.log(getStockValues(2, 'Microsoft', 1300, 2800))
console.log(getStockValues())