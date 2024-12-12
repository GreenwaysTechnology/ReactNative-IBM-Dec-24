
export const User = (id, userName, email, address, status) => {
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
        {User(1, 'Subramanian Murugan', 'subu@gmail.com', { city: 'Coimbatore' }, true)}
        {User(2, 'Murugan', 'murugan@gmail.com', { city: 'Coimbatore' }, true)}

    </div>
}