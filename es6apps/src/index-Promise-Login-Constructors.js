
//setTimeout (callback api) with Promise :converting existing callback api into promise

function login(userName, password) {
    //return promise after 5000ms
    return new Promise((resolve, reject) => {
        if (userName === 'admin' && password === 'admin') {
            setTimeout(resolve, 5000, 'login success')
        } else {
            setTimeout(reject, 5000, 'login Failed')
        }
    })
}

function main() {
    login('admin', 'admin').then(status => console.log(status)).catch(err => console.log(err))
    login('xx', 'yyy').then(status => console.log(status)).catch(err => console.log(err))
}

main()