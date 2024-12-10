
//success result only 
function blockMe(message) {
    console.log(message)
}
function getValue() {
    //Return Project Object
    return Promise.reject('something went wrong')
}

function main() {
    blockMe('start')
    getValue().catch(err => console.log(err))
    blockMe('end')
}
main()