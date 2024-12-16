import { useState } from "react"

//functional components with state declaration
const Counter = props => {
    const [counter, setCounter] = useState(0)
    return <div>
        <h1>Counter : {counter}</h1>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+</button>
    </div>
}


export default function App() {

    return <>
        <Counter />
    </>
}