
function login(userName, password, resolve, reject) {
    if (userName === 'admin' && password === 'admin') {
        setTimeout(resolve, 1000, 'Login success')
    } else {
        setTimeout(reject, 1000, 'Login Failed')
    }
}

function main() {
    login('admin', 'admin', (status) => { console.log(status) }, (err) => { console.log(err) })
    login('bar', 'foo', (status) => { console.log(status) }, (err) => { console.log(err) })

}
main()