
//here props is just variable name, which can be any thing like abc
//what is value of props? props will have always object, what ever properties we pass
//from the parent component(App) , which is merged as one single object
export const User = (props) => {
    console.log(props)
    return <div>
        <h1>Id : {props.id}</h1>
        <h2>Name : {props.userName}</h2>
        <h2>Email: {props.email}</h2>
        <h3>City : {props.address.city}</h3>
        <h3>Status : {props.status ? "Available" : "Not Available"}</h3>
    </div>
}

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