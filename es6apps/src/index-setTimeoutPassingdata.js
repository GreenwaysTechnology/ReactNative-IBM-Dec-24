//async

function blockMe(message) {
    console.log(message)
}
function sayHello(hello) {
    //setTimeout(hello, 5000,'how are you')
    setTimeout(function () {
        hello('how are you ?')
    }, 5000)
}

function main() {
    blockMe('start')
    // sayHello(function (message) {
    //     console.log(message)
    // })
    sayHello((message) => {
        console.log(message)
    })
    blockMe('end')
}
main()