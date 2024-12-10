//async

function blockMe(message) {
    console.log(message)
}
function sayHello(hello) {
    //async highlevel api , here hello is pointing a function which is called
    // listener or callback function
    setTimeout(hello, 5000)
    console.log('heee')
}


function main() {
    blockMe('start')
    //when you pass function as parameter, which
    sayHello(() => console.log('hello'))
    blockMe('end')
}
main()