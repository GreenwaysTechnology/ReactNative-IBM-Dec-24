

function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('login success')
    }
    else {
        return Promise.reject('Login Failed')
    }
}

function main() {
    login('admin', 'admin').then(status => console.log(status)).catch(err => console.log(err))
    login('xx', 'yyy').then(status => console.log(status)).catch(err => console.log(err))

}

main()