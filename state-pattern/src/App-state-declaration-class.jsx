import React from "react"

class Review extends React.Component {

  //state is just variable from React.Component super class
  //state value must be always object, which holds component data
  state = {
    like: 0
  }

  render() {
    return <div>
      <h1>Review App</h1>
      <h2>Like : {this.state.like}</h2>
    </div>
  }
}

export default function App() {
  return <div>
    <Review />
  </div>
}