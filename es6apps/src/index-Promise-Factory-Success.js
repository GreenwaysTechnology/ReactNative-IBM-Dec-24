
//success result only 
function blockMe(message) {
    console.log(message)
}
function getValue() {
    //Return Project Object
    return Promise.resolve('Hello')
}

function main() {
    blockMe('start')
    getValue().then(result => console.log(result))
    blockMe('end')
}
main()