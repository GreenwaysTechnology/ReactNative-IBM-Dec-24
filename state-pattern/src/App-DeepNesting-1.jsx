import React from "react"

class Review extends React.Component {
    state = {
        house: {
            name: 'RavenClaw',
            points: 10
        }

    }
    onIncrement = () => {
        // this.setState((prevState => {
        //     return {
        //         ...prevState, //this copy all outer keys  //Level -0 copy
        //         house: {
        //             ...prevState.house, //this copy house related keys // level -1 copy
        //             points: prevState.house.points + 1
        //         }
        //     }
        // }))
        this.setState(({
            ...this.state, //this copy all outer keys  //Level -0 copy
            house: {
                ...this.state.house, //this copy house related keys // level -1 copy
                points: this.state.house.points + 1
            }
        }))


    }
    render() {
        //State as prop
        return <div>
            <h1>House Name : {this.state.house.name} Points : {this.state.house.points}</h1>
            <button onClick={this.onIncrement}>Rate</button>
        </div>
    }
}


export default function App() {
    return <div>
        <Review />
    </div>
}