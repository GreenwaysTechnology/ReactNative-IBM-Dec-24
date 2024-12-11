//DOM element creation using React.js
// import ReactDOM from 'react-dom/client'
import { createRoot } from "react-dom/client"
//Declare Node
const Heading = <h1>Hello</h1>

//insert Node
// ReactDOM.createRoot(document.getElementById('root')).render(Heading)
createRoot(document.getElementById('root')).render(Heading)