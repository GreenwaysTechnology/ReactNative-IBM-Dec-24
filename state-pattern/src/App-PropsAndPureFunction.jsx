import React from "react"

//Pure Function Rule A: in React Component
//According props every component is pure function 
const Hello = props => {
    //change props : props are readonly
    props.message = 'Hey'

    return <h1>{props.message}</h1>
}

export default function App() {
    return <div>
        <Hello message="Hello" />
    </div>
}