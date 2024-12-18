import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

//redux -Statement Management layer
//1.reducer.
const CounterReducer = (counter = 0, action) => {
    //biz 
    switch (action.type) {
        case 'counter/increment':
            return counter + 1
        case 'counter/decrement':
            return counter - 1
        default:
            //inital
            return counter;
    }
}

//2.create store object and connect with reducer
export const store = configureStore({
    reducer: {
        //key is used inside react(ui) to read data and call biz logic
        counter: CounterReducer
    }
})

//connect the store with main.jsx

//react- UI layer
const Counter = () => {
    //access redux state and biz logic
    //appState.reducerName
    const counter = useSelector(state => {
        return state.counter
    })
    //dispatch
    const dispatch = useDispatch()

    //Event Handler
    const onIncrement = () => {
        console.log('click')
        //send action(request) to redux
        dispatch({
            type: 'counter/increment'
        })
    }
    return <>
        <h1>Counter : {counter}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: 'counter/decrement' })
        }}>-</button>
    </>
}

export default function App() {
    return <div>
        <Counter />
    </div>
}