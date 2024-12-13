import React from "react"

class Review extends React.Component {

    state = {
        like: 0
    }
    onLike = () => {
        //immutable logic
        // this.setState(function (prevState) {
        //     //return immutable object
        //     //oldway
        //     // return {
        //     //     like: prevState.like + 1
        //     // }

        //     //Using Object.assign method
        //     // return Object.assign({}, prevState, { like: prevState.like + 1 })

        //     //Using spread operator
        //     return { ...prevState, like: prevState.like + 1 }
        // })
        // this.setState((prevState) => {
        //     return { ...prevState, like: prevState.like + 1 }
        // })
        // this.setState((prevState) => ({ ...prevState, like: prevState.like + 1 }))

        this.setState(({ ...this.state, like: this.state.like + 1 }))

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