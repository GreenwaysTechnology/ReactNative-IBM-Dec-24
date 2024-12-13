// function transform(data) {
//     return data.map(item => item.toUpperCase())
// }

// let list = ['subramanian', 'ram', 'murugan']

// const response = transform(list)

// console.log(list === response ? "Same" : "Different")

// function filter(data) {
//     return data.filter(item => item.status === true)
// }

// let employees = [{
//     id: 1,
//     name: 'subramanian',
//     status: true
// },
// {
//     id: 2,
//     name: 'Ram',
//     status: false
// },
// {
//     id: 3,
//     name: 'Karthik',
//     status: true
// },
// {
//     id: 4,
//     name: 'Murugan',
//     status: false
// }

// ]

// const response = filter(employees)

// console.log(employees === response ? "Same" : "Different")

//is it pure or not
// function add(todos, todo) {
//     return todos.push(todo)
// }
// function add(todos, todo) {
//     // return todos.push(todo)
//     return todos.concat(todo)
//  }
function add(todos, todo) {
    // return todos.push(todo)
    //  return todos.concat(todo)
    return [...todos, todo]
}
let todos = [{
    title: 'Learn react',
    done: true
}];

//Testing 
Object.freeze(todos)

console.log(add(todos, { title: 'Learn Microservices', done: false }));