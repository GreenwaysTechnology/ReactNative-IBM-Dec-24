

//default props: assinging default values , incase if you dont pass any prop value

export const User = ({ id = 0, userName = 'userName',
    address: { city } = { city: 'City' }, status = false, email = "email@example.com" }) => <div>
        <h1>Id : {id}</h1>
        <h2>Name : {userName}</h2>
        <h2>Email: {email}</h2>
        <h3>City : {city}</h3>
        <h3>Status : {status ? "Available" : "Not Available"}</h3>
    </div>

export default function App() {
    return <div>
        <User />

        <User id={2} userName="Murugan"
            email="murugan@gmail.com" address={{ city: 'Chennai' }} status={true} />

        <User  address={{ city: 'Delhi' }} status={false} />

    </div>
}