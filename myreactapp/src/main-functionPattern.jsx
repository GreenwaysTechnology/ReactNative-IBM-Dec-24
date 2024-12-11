//1.functional  pattern
import { createRoot } from "react-dom/client"

// function Heading() {
//     return <h1>Hello!!!</h1>
// }
// const Heading = () => {
//     return <h1>Hello!!!</h1>
// }
const Heading = () => <h1>Hello!!!</h1>

// createRoot(document.getElementById('root')).render(Heading())
createRoot(document.getElementById('root')).render(<Heading></Heading>)