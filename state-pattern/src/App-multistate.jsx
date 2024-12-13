import React from "react"

class Review extends React.Component {
    state = {
        like: 0,
        dislike: 0
    }
    render() {
        return <div>
            <h1>Review App</h1>
            <h2>Like : {this.state.like} Dislike: {this.state.dislike}</h2>
            {/* Inline Listener  */}
            <button onClick={() => {
                this.setState(({ ...this.state, like: this.state.like + 1 }))
            }}>Like</button>
            <button onClick={() => {
                this.setState(({ ...this.state, dislike: this.state.dislike + 1 }))
            }}>Dislike</button>
        </div>
    }
}

export default function App() {
    return <div>
        <Review />
    </div>
}