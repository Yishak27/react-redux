import { createStore } from 'redux'
import { configureStore, createSlice } from '@reduxjs/toolkit';
//creating the reducer
const initialState = { counter: 0, counterTouch: false }
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state, action) {
            state.counter += action.value
        },
        decrement(state) {
            state.counter--;
        },
        counterTouch(state) {
            state.counterTouch = !state.counterTouch;
        }
    }
})
const store = configureStore({ reducer: counterSlice.reducer })
// const counterReducer = (state =initialState , action) => {
//     if (action.type === 'increment') {
//         return { counter: state.counter + action.value, counterTouch: state.counterTouch }
//     }
//     if (action.type === 'decrement') {
//         return { counter: state.counter - 1, counterTouch: state.counterTouch }
//     }
//     if (action.type === "touch") {
//         return { counterTouch: !state.counterTouch, counter: state.counter }
//     }
//     return state;
// }
// //creating the store
// const store = createStore(counterReducer);

// making an action

export default store;