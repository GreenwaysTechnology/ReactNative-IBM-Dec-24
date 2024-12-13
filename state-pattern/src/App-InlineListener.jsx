import React from "react"

class Review extends React.Component {
    state = {
        like: 0
    }
    render() {
        console.log('render is called')
        return <div>
            <h1>Review App</h1>
            <h2>Like : {this.state.like}</h2>
            {/* Inline Listener  */}
            <button onClick={() => {
                this.setState(({ ...this.state, like: this.state.like + 1 }))
            }}>Like</button>
        </div>
    }
}

export default function App() {
    return <div>
        <Review />
    </div>
}