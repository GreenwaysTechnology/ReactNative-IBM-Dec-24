const getUser = () => {
    console.log('getUser is called')
    return new Promise((resolve, reject) => {
        //dummy user 
        let user = {
            name: 'admin'
        }
        if (user) {
            setTimeout(resolve, 1000, user)
        } else {
            setTimeout(reject, 1000, 'User Not Found')
        }
    })

}

const login = user => {
    console.log('login is called')
    return new Promise((resolve, reject) => {
        if (user.name === 'admin') {
            setTimeout(resolve, 1000, 'login success')
        } else {
            setTimeout(reject, 1000, 'login failed')
        }
    })
}
const showDashboard = status => {
    console.log('showDashboard  is called')
    return new Promise((resolve, reject) => {
        if (status === 'login success') {
            setTimeout(resolve, 1000, 'Welcome to Dashboard')
        } else {
            setTimeout(reject, 1000, 'Welcome to Guest page')
        }
    })
}


function main() {
    //callback style
    // getUser((user) => {
    //     //call login
    //     login(user, (status) => {
    //         //call dashboard
    //         showDashboard(status, (page) => {
    //             console.log(page)
    //         }, (err) => {
    //             console.log(err)
    //         })
    //     }, (err) => {
    //         console.log(err)
    //     })
    // }, (err) => {
    //     console.log(err)
    // })

    // getUser()
    //     .then(user => {
    //         return login(user)
    //     })
    //     .then(status => {
    //         return showDashboard(status)
    //     })
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(err => console.log(err))

    getUser()
        .then(user => login(user))
        .then(status => showDashboard(status))
        .then(res => console.log(res))
        .catch(err => console.log(err))

}
main()