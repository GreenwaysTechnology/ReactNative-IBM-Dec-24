import React from "react"

class Review extends React.Component {

    //state is just variable from React.Component super class
    //state value must be always object, which holds component data
    state = {
        like: 0
    }
    //Listener : method-Should be alway arrow function
    //on+NameoftheActin
    //onIncrement
    //onSave
    //onUpdate
    //onDelete
    onLike = () => {
        console.log('button is clicked')
    }

    render() {
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