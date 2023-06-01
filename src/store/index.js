import { createStore } from 'redux'
//creating the reducer
const counterReducer = (state = { counter: 0, counterTouch: false }, action) => {
    if (action.type === 'increment') {
        return { counter: state.counter + action.value, counterTouch: state.counterTouch }
    }
    if (action.type === 'decrement') {
        return { counter: state.counter - 1, counterTouch: state.counterTouch }
    }
    if (action.type === "touch") {
        return { counterTouch: !state.counterTouch, counter: state.counter }
    }
    return state;
}
//creating the store
const store = createStore(counterReducer);

// making an action

export default store;