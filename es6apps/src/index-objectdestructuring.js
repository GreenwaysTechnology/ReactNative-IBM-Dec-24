//with out object destructuring
// function printEmployee(employee) {
//  console.log(`Id :  ${employee.id}`)
//  console.log(`Name :  ${employee.name}`)
//  console.log(`City :  ${employee.address.city}`)
// }

// //with  object destructuring
// function printEmployee(employee) {
//     const { id, name, address } = employee

//     console.log(`Id :  ${id}`)
//     console.log(`Name :  ${name}`)
//     console.log(`City :  ${address.city}`)
// }
// //with  object destructuring
// function printEmployee(employee) {
//     const { id, address: { city }, name } = employee
//     console.log(`Id :  ${id}`)
//     console.log(`Name :  ${name}`)
//     console.log(`City :  ${city}`)
// }
// //with  object destructuring
// function printEmployee({ id, name, address: { city } }) {
//     console.log(`Id :  ${id}`)
//     console.log(`Name :  ${name}`)
//     console.log(`City :  ${city}`)
// }
//with  object destructuring
const printEmployee = ({ id, name, address: { city } }) => {
    console.log(`Id :  ${id}`)
    console.log(`Name :  ${name}`)
    console.log(`City :  ${city}`)
}
printEmployee({ id: 1, name: 'Subramaian', address: { city: 'Coimbatore' } })