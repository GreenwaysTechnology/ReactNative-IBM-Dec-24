
//list with strings

let names = ['Subramanian', 'Murugan', 'Ram', 'Raja']
names.forEach(item => console.log(item))

//objects 
let products = [
    {
        id: 1,
        name: 'P1',
        qty: 100,
        price: 100
    },
    {
        id: 2,
        name: 'P2',
        qty: 12,
        price: 1200
    }
]
products.forEach(product => {
    console.log(product.id, product.name, product.qty, product.price)
})