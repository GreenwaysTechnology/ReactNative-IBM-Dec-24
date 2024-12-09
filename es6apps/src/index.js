
// function login(userName, password, resolve, reject) {
//     if (userName === 'admin' && password === 'admin') {
//         resolve('login success')
//     } else {
//         reject('login failed')
//     }
// }
const login = (userName, password, resolve, reject) => {
    if (userName === 'admin' && password === 'admin') {
        resolve('login success')
    } else {
        reject('login failed')
    }
}

// login('admin', 'admin', function (status) {
//     console.log(status)
// }, function (err) {
//     console.log(err)
// })

// login('admin', 'admin', (status) => {
//     console.log(status)
// }, (err) => {
//     console.log(err)
// })

// login('foo', 'bar', (status) => {
//     console.log(status)
// }, (err) => {
//     console.log(err)
// })

login('admin', 'admin', status => console.log(status), err => console.log(err))

login('foo', 'bar', status => console.log(status), err => console.log(err))