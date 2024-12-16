import { useEffect } from "react"
import { useState } from "react"


const Counter = () => {
    const [counter, setCounter] = useState(0)

    //componentDidMount
    useEffect(() => {
        setTimeout(() => {
            setCounter(counter + 1)
        }, 1000)
    }, [])

    return <div>
        <h1>Counter : {counter}</h1>
    </div>
}


export default function App() {

    return <div>
        <Counter />
    </div>
}