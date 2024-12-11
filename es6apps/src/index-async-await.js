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


async function main() {
    //then and catch
    // getUser()
    //     .then(user => login(user))
    //     .then(status => showDashboard(status))
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    try {
        //sync way of writing async code
        //call promise apis
        const user = await getUser()
        const status = await login(user)
        const dashboard = await showDashboard(status)
        console.log(user, status, dashboard)
    }
    catch (err) {
        console.log(err)
    }

}
main()