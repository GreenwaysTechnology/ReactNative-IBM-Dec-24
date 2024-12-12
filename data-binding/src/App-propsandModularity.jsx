import { Avatar } from "./avatar/Avatar"

//Avatar
export const Address = ({ city }) => <div>
    <h3>City {city}</h3>
</div>
export const UserStatus = ({ status }) => <h3>Status : {status ? "Available" : "Not Available"}</h3>

export const User = ({ id, profilePic, userName, address: { city }, status, email }) => <div>
    <Avatar profilePic={profilePic} />
    <h1>Id : {id}</h1>
    <h2>Name : {userName}</h2>
    <h2>Email: {email}</h2>
    <UserStatus status={status} />
    <Address city={city} />
</div>


export default function App() {
    const profilePic = 'https://imgur.com/1bX5QH6.jpg'
    return <div>
        <User profilePic={profilePic} id={1} userName="Subramanian Murugan"
            email="subu@gmail.com" address={{ city: 'Coimbatore' }} status={true} />
    </div>
}