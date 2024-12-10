
let product1 = {
    id: 1,
    name: 'Tv',
    category: {
        id: 1,
        name: 'Electronics'
    }
}

let product2 = {
    id: 1,
    name: 'Tv',
    category: {
        id: 1,
        name: 'Electronics'
    }
}

let product3 = product2

console.log(product1 == product2)
console.log(product2 == product3)
console.log(product1.id, product1.name, product1.category.name)
console.log(product1)