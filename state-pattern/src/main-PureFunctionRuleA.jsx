//if function receives input, the function returns the input without any mutation...

//pure function 
// function Hello(message) {
//     return message
// }

//pure or not -impure function ?
function Hello(message) {
    //side effect: changing function input parameter
    return message.toUpperCase()
}
console.log(Hello('hello'))