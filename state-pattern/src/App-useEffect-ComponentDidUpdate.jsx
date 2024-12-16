import { use } from "react"
import { useEffect } from "react"
import { useState } from "react"


const Counter = () => {
    const [count, setCount] = useState(0)
    const [calculation, setCalculation] = useState(0)

    //call this every re render : componentDidUpdate
    useEffect(() => {
        setCalculation(calculation + 2)
    }, [count])

    return <>
        <h1>Count : {count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <h1>Calculation : {calculation}</h1>
    </>

}


export default function App() {

    return <div>
        <Counter />
    </div>
}