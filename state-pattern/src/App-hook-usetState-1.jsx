import { useState } from "react"

//functional components with state declaration
const Counter = props => {
    const [counter, setCounter] = useState(0)

    const onIncrement = () => {
        // setCounter(prevCounter => {
        //     return prevCounter + 1
        // })
        setCounter(counter + 1)
    }

    return <div>
        <h1>Counter : {counter}</h1>
        <button onClick={onIncrement}>+</button>
    </div>
}


export default function App() {

    return <>
        <Counter />
    </>
}