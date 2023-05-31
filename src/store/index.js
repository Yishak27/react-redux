import { createStore } from 'redux'
//creating the reducer
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return { counter: state.counter + 1 }
    }
    if (action.type === 'decrement') {
        return { counter: state.counter - 1 }
    }
    return state;
}
//creating the store
const store = createStore(counterReducer);

// making an action

export default store;