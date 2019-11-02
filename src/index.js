const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "INCREMENT" }));

const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', e => dispatch({ type: "DECREMENT" }));

const incrementFiveButton = document.getElementById('incrementFive');
incrementFiveButton.addEventListener('click', e => dispatch({ type: "INCREMENT_5" }));

const decrementFiveButton = document.getElementById('decrementFive');
decrementFiveButton.addEventListener('click', e => dispatch({ type: "DECREMENT_5" }));

const redOption = document.getElementById('red');
redOption.addEventListener('click', e => dispatch({ type: "DISPLAY_RED" }));

const greenOption = document.getElementById('green');
greenOption.addEventListener('click', e => dispatch({ type: "DISPLAY_GREEN" }));

const blueOption = document.getElementById('blue');
blueOption.addEventListener('click', e => dispatch({ type: "DISPLAY_BLUE" }));

