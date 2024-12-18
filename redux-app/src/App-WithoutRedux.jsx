import { useState } from "react"

const Counter = () => {
  //state declaration
  const [count, setCount] = useState(0)

  //biz logic
  const onIncrement = () => {
    setCount(count + 1)
  }
  //user interface code
  return <div>
    <h1>Count {count}</h1>
    <button onClick={onIncrement}>+</button>
  </div>
}

export default function App() {
  return <div>
    <Counter />
  </div>
}