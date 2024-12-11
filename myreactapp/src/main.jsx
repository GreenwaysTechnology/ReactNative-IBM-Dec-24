import { createRoot } from "react-dom/client"
// import React, {Fragment}  from "react"

// Root element is Div
// const Heading = () => {
//     return <div>
//         <h1>Hello</h1>
//         <p>This is element</p>
//     </div>
// }
//i dont want div as root element,Fragements
// const Heading = () => {
//     return <React.Fragment>
//         <h1>Hello</h1>
//         <p>This is element</p>
//     </React.Fragment>
// }

// const Heading = () => {
//     return <Fragment>
//         <h1>Hello</h1>
//         <p>This is element</p>
//     </Fragment>
// }

const Heading = () => {
    return <>
        <h1>Hello</h1>
        <p>This is element</p>
    </>
}


createRoot(document.getElementById('root')).render(<Heading />)