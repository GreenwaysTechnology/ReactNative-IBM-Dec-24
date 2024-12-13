const Dashboard = () => {
  return <h1>Dashboard</h1>
}
const Guest = () => {
  return <h1>Guest</h1>
}
// const Auth = () => {
//   const isLoggedIn = false
//   if (isLoggedIn) {
//     return <Dashboard />
//   } else {
//     return <Guest />
//   }
// }
// const Auth = () => {
//   const isLoggedIn = true
//   return isLoggedIn ? <Dashboard/> : <Guest/>
// }

// const Auth = () => {
//   const isLoggedIn = true
//   return isLoggedIn ? <Dashboard/> : <Guest/>
// }

const Auth = () => {
  const isLoggedIn = true
  return <div>
    <><h1>Welcome to App!</h1> {isLoggedIn && <p>You are logged In</p>}</>
  </div>
}

export default function App() {
  return <div>
    <Auth />
  </div>
}