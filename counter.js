const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');
const resetEl = document.getElementById('reset');
const valueEl = document.getElementById('value');
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const RESET = 'reset';


const increment = () => {

    return {
        type: INCREMENT,
        payload: 5,
    }

};
const decrement = () => {

    return {
        type: DECREMENT,
        payload: 1
    }

};
const reset = () => {
    return { type: RESET }

};



const initialState = { 
    value: 0,
 };

const counterReducer = (state = initialState, action) => {
    if (action.type === INCREMENT)
        return {
            ...state,
            value: state.value + action.payload,
        };
    else if (action.type === DECREMENT)
        return {
            ...state,
            value: state.value - action.payload,
        };
    else if (action.type === RESET)
        return {
            ...state,
            value: 0,
        };

    else
        return state;
}
var store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState()
    valueEl.innerText = state.value.toString();
}
render();

store.subscribe(render)


incrementEl.addEventListener("click", () => {
    store.dispatch(increment())

});
decrementEl.addEventListener("click", () => {
    store.dispatch(decrement())

});

resetEl.addEventListener("click", () => {
    store.dispatch(reset())
});