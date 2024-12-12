// export const User = (props) => {
//     const { id, userName, address: { city }, status, email } = props
//     return <div>
//         <h1>Id : {id}</h1>
//         <h2>Name : {userName}</h2>
//         <h2>Email: {email}</h2>
//         <h3>City : {city}</h3>
//         <h3>Status : {status ? "Available" : "Not Available"}</h3>
//     </div>
// }
export const User = ({ id, userName, address: { city }, status, email }) => <div>
    <h1>Id : {id}</h1>
    <h2>Name : {userName}</h2>
    <h2>Email: {email}</h2>
    <h3>City : {city}</h3>
    <h3>Status : {status ? "Available" : "Not Available"}</h3>
</div>


export default function App() {
    return <div>
        <User id={1} userName="Subramanian Murugan"
            email="subu@gmail.com" address={{ city: 'Coimbatore' }} status={true} />

        <User id={2} userName="Murugan"
            email="murugan@gmail.com" address={{ city: 'Chennai' }} status={true} />

        <User id={3} userName="Ram"
            email="ram@gmail.com" address={{ city: 'Delhi' }} status={true} />

    </div>
}