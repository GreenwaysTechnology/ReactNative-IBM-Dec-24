import { configureStore, createReducer, createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

//redux -Statement Management layer
//1.reducer.
// const CounterReducer = (counter = 0, action) => {
//     //biz 
//     switch (action.type) {
//         case 'counter/increment':
//             return counter + 1
//         case 'counter/decrement':
//             return counter - 1
//         default:
//             //inital
//             return counter;
//     }
// }
//modern way- using createReducer function
// const increment = 'counter/increment';
// const decrement = 'counter/decrement'
// let initialState = { value: 0 }
// const CounterReducer = createReducer(initialState, (builder) => {
//     //write biz logic 
//     builder.addCase(increment, (state, action) => {
//         //immer js code
//         state.value += 1
//     }).addCase(decrement, (state, action) => {
//         state.value -= 1
//     }).addDefaultCase((state, action) => { })
// })

//Using Modern way- createSlice

let initialState = { value: 0 }

const counterSlice = createSlice({
    name: 'counter',
    //initialState:initialState
    initialState,
    reducers: {
        increment(state, action) {
            //immerjs code
            state.value += 1
        },
        decrement(state, action) {
            state.value -= 1
        },
        incrementBy(state, action) {
            state.value += action.payload
        }
    },
    // extraReducers: {

    // }
})

//Extract Reducers from the slice
const CounterReducer = counterSlice.reducer
//Extract action constant
//extract actions
const { increment, decrement, incrementBy } = counterSlice.actions


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
    const count = useSelector(state => {
        return state.counter
    })
    //dispatch
    const dispatch = useDispatch()

    //Event Handler
    const onIncrement = () => {
        console.log('click')
        //send action(request) to redux
        dispatch({
            type: increment
        })
    }
    return <>
        <h1>Counter : {count.value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: decrement })
        }}>-</button>
    </>
}

export default function App() {
    return <div>
        <Counter />
    </div>
}