//async

function blockMe(message) {
    console.log(message)
}
function sayHello() {
    // setTimeout(function () {
    //     console.log('async task')
    // }, 5000)
    setTimeout(() => {
        console.log('async task')
        //call some other function
    }, 5000)
    console.log('heee')
}


function main() {
    blockMe('start')
    sayHello()
    blockMe('end')
}
main()