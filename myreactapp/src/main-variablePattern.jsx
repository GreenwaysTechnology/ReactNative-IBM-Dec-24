//1.variable pattern
import { createRoot } from "react-dom/client"

//Heading is just variable
//<h1>Hello</h1> is component
const Heading = <h1>Hello</h1>

createRoot(document.getElementById('root')).render(Heading)