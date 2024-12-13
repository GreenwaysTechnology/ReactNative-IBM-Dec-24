import React from "react"

class Review extends React.Component {
    state = {
        like: 0,
        dislike: 0
    }
    onIncrement = () => {
        this.setState(({ ...this.state, like: this.state.like + 1 }))
    }
    onDecrement = () => {
        this.setState(({ ...this.state, dislike: this.state.dislike + 1 }))

    }
    render() {
        //State as prop
        return <ReviewDisplay {...this.state} onIncrement={this.onIncrement} onDecrement={this.onIncrement} />
    }
}
const ReviewDisplay = props => {
    return <>
        <div>
            <h1>Review App</h1>
            <h2>Like : {props.like} Dislike: {props.dislike}</h2>
            <button onClick={props.onIncrement}>Increment</button>
            <button onClick={props.onDecrement}>Decrement</button>

        </div>
    </>
}

export default function App() {
    return <div>
        <Review />
    </div>
}