//1.class   pattern
import { createRoot } from "react-dom/client"
import React from "react"

class Heading extends React.Component {
    //override the React.component render method
    render() {
        return <h1>Hello!!</h1>
    }
}

createRoot(document.getElementById('root')).render(<Heading></Heading>)