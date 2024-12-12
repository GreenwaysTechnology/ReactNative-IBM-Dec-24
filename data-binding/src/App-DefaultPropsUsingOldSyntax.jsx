

//default props: assinging default values , incase if you dont pass any prop value

export const User = (props) => <div>
    <h1>Id : {props.id}</h1>
    <h2>Name : {props.userName}</h2>
    <h2>Email: {props.email}</h2>
    <h3>City : {props.address.city}</h3>
    <h3>Status : {props.status ? "Available" : "Not Available"}</h3>
</div>

//Default Props
User.defaultProps = {
    id: 0,
    userName: 'User Name',
    email: 'admin@example.com',
    status: false,
    address: {
        city: 'City'
    }
}

export default function App() {
    return <div>
        <User />

        <User id={2} userName="Murugan"
            email="murugan@gmail.com" address={{ city: 'Chennai' }} status={true} />

        <User address={{ city: 'Delhi' }} status={false} />

    </div>
}