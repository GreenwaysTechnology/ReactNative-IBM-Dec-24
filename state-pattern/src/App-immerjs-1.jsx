import { produce } from "immer"
import React from "react"

class Review extends React.Component {
    state = {
        house: {
            name: 'RavenClaw',
            points: 10
        }

    }
    onIncrement = () => {
        //immutable manual code
        // this.setState(({
        //     ...this.state, //this copy all outer keys  //Level -0 copy
        //     house: {
        //         ...this.state.house, //this copy house related keys // level -1 copy
        //         points: this.state.house.points + 1
        //     }
        // }))
        // this.setState((prevState) => {
        //     return produce(prevState, (draft) => {
        //         //write biz logic
        //         draft.house.points += 1
        //     })
        // })
        this.setState(produce(this.state, (draft) => {
            draft.house.points += 1
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