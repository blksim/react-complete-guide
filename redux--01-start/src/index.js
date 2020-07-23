import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // hooks up our redux store to the react app.
import { createStore, combineReducers } from 'redux';
import counterReducer from './store/reducer/counter';
import resultReducer from './store/reducer/result';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer'; // reducers typically store the logic into their own files because in react app have a lot of code for different types of actions.

// combineReducers is a function which takes a js object mapping our reducers to different slices of our state as input
// and merges everything into one state and one reducer for us.
// Now we will have one state in the end but to avoid naming conflicts,
// redux adds one level of nesting where it has one state object 
// but basically with these keys here, in combined reducers as properties which gives us access to these substates for these feature areas.
const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

// Store should be created right before after the app or when the app starts, so the index.js is a great place.
// where we mount aur app component to the dom.

// Create a store with a reducer as the input
const store = createStore(reducer);

// Connect the store to react app. you have to wrap with provider like this.
// <Provider> is a helper component which allows us to kind of inject our store into the react components.
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// created store is stored in that store constant.
registerServiceWorker();
