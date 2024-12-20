import { produce } from "immer"
import { useState } from "react"

const Counter = props => {
    const [counter, setCounter] = useState({ increment: 0, decrement: 100 })
    return <div>
        <h1>Increment : {counter.increment} Decrement : {counter.decrement}</h1>
        <button onClick={() => {
            // setCounter(prevCounter => {
            //     //immutable logic
            //     return { ...prevCounter, increment: prevCounter.increment + 1 }
            // })
            // setCounter({ ...counter, increment: counter.increment + 1 })
            setCounter(produce(counter, draft => {
                draft.increment += 1
            }))

        }}>+</button>
        <button onClick={() => {
            setCounter(produce(counter, draft => {
                draft.decrement -= 1
            }))
        }}>-</button>
    </div>
}


export default function App() {

    return <>
        <Counter />
    </>
}