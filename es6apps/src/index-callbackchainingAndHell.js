//getUser--->login--->dashboard
//getUser-NoUser-Reject
//getUser--->login--->Failed->Reject
//getUser-->login-->Dashboard--->Fail

const getUser = (resolve, reject) => {
    console.log('getUser is called')
    //dummy user 
    let user = {
        name: 'admin'
    }
    //user = null
    //if user found
    if (user) {
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(reject, 1000, 'User Not Found')
    }

}

const login = (user, resolve, reject) => {
    console.log('login is called')
    if (user.name === 'admin') {
        setTimeout(resolve, 1000, 'login success')
    } else {
        setTimeout(reject, 1000, 'login failed')
    }
}
const showDashboard = (status, resolve, reject) => {
    console.log('showDashboard  is called')
    if (status === 'login success') {
        setTimeout(resolve, 1000, 'Welcome to Dashboard')
    } else {
        setTimeout(reject, 1000, 'Welcome to Guest page')
    }
}


function main() {
    getUser((user) => {
        //call login
        login(user, (status) => {
            //call dashboard
            showDashboard(status, (page) => {
                console.log(page)
            }, (err) => {
                console.log(err)
            })
        }, (err) => {
            console.log(err)
        })
    }, (err) => {
        console.log(err)
    })
}
main()