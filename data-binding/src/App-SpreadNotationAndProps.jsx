
//passing each and every propery manually.

// export const User = (props) => {
//     // forwarding the props to User Details
//     return <UserDetails id={props.id}
//         userName={props.userName} email={props.email}
//         address={props.address} status={props.status}
//     />
// }
//the above code can be simpilifed using spread notation (es 7 feature)
// ... (spread notation)

export const User = (props) => {
    // forwarding the props to User Details
    return <UserDetails  {...props} title="User Details" />
}

const UserDetails = props => <div>
    <h1>{props.title}</h1>
    <h1>Id : {props.id}</h1>
    <h2>Name : {props.userName}</h2>
    <h2>Email: {props.email}</h2>
    <h3>City : {props.address.city}</h3>
    <h3>Status : {props.status ? "Available" : "Not Available"}</h3>
</div>


export default function App() {
    return <div>
        <User id={2} userName="Murugan"
            email="murugan@gmail.com" address={{ city: 'Chennai' }} status={true} />
    </div>
}