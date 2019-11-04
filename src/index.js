const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementOneButton = document.getElementById('incrementOne');
incrementOneButton.addEventListener('click', e => dispatch({ type: "INCREMENT_1" }));

const decrementOneButton = document.getElementById('decrementOne');
decrementOneButton.addEventListener('click', e => dispatch({ type: "DECREMENT_1" }));

const incrementFiveButton = document.getElementById('incrementFive');
incrementFiveButton.addEventListener('click', e => dispatch({ type: "INCREMENT_5" }));

const decrementFiveButton = document.getElementById('decrementFive');
decrementFiveButton.addEventListener('click', e => dispatch({ type: "DECREMENT_5" }));

const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => incrementBy());

const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', e => decrementBy());

const colorOption = document.getElementById('color');

colorOption.addEventListener('change', e => {
    dispatch({ type: "DISPLAY_COLOR",
                color: colorOption.value })
    }
)



