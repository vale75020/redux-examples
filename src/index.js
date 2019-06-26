import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux';  // create our store 
import allReducers from './reducers'  // import all reducers
import { Provider } from 'react-redux';  // connect store with app

const mystore = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )





ReactDOM.render(

<Provider store={mystore}>
<App />
</Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//---------------------------------------------------------------------//


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// import {createStore} from 'redux';


// STORE --> GLOBAL STATE

// ACTION  -->  WHAT YOU WANT TO DO (increment) a function that returns an object
// const increment = () => {
//     return {
//         type: 'INCREMENT'
//     }
// }

// const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     }
// }


// REDUCER -->  MODIFY STATE
// const counter = (state = 0, action) => {
//     switch(action.type){
//         case "INCREMENT":
//             return state + 1;
//         case "DECREMENT":
//             return state - 1;
//     }
// };

//  let store = createStore(counter);

 // Display it in the console
//  store.subscribe(() => console.log(store.getState()));


// DISPATCH  --> SEND ACTION TO REDUCER
// store.dispatch(increment());
// store.dispatch(decrement());


// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

