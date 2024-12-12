
const User = () => {
  const id = 1
  const userName = 'Subramanian Murugan'
  const email = 'sasubramanian_m@hotmail.com'
  const address = {
    city: 'Coimbatore'
  }
  const status = true

  return <div>
    <h1>Id : {id}</h1>
    <h2>Name : {userName}</h2>
    <h2>Email: {email}</h2>
    <h3>City : {address.city}</h3>
    <h3>Status : {status ? "Available" : "Not Available"}</h3>
  </div>
}

export default function App() {
  return <div>
    <User />
  </div>
}