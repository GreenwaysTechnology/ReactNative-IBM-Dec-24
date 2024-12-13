import React from "react"

class Review extends React.Component {

    state = {
        like: 0
    }
    onLike = () => {
        console.log('button is clicked')
        this.state.like++
        console.log(this.state.like)
        this.render()
    }

    render() {
        console.log('render is called')
        return <div>
            <h1>Review App</h1>
            <h2>Like : {this.state.like}</h2>
            <button onClick={this.onLike}>Like</button>
        </div>
    }
}

export default function App() {
    return <div>
        <Review />
    </div>
}