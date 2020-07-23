const redux = require('redux'); // node.js import syntax
const createStore = redux.createStore; // create a new redux store
const initialState = {
  counter: 0
}

// Reducer - the only thing that may update the state in the end, strongly connected to the store 
const rootReducer = (state = initialState, action) => { // state = initialState when store state is undefined(ES6 feature)
  // Reducer takes two elements: [1]current state(should be initialized), [2]action
  // returns updated state
  if (action.type === 'INC_COUNTER') {
    // don't state.counter++; then return state <==== ruins original state
    // !!NEVER MUTATE THE DATA!!
    return {
      ...state, // what you instead do is returning a new js object where you may first copy the old state with the spread operator
      counter: state.counter + 1 // and then overwrite the property you want to adjust.
    }
  }
  if (action.type === 'ADD_COUNTER') {
    // don't state.counter++; then return state <==== ruin original state
    // NEVER MUTATE THE DATA
    return {
      ...state,
      counter: state.counter + action.value
    }
  }
  return state; // the simplest reducer you can write returns the old state.
};

// Store 
const store = createStore(rootReducer);
console.log(store.getState()); // { counter : 0 }

// Subscription - makes sure that I don't have to manually call getState()
// it takes an argument(function) which will be executed whenever the state is updated.
store.subscribe(() => { // getting triggered whenever acttion dispatched and mutated to the store
  console.log('[Subscription]', store.getState());
  // it will be executed whenever action is dispatched and mutates the store.
});

// Dispatching action - takes an acion that should be a js object which needs to have a type property.
// 'type'(UPPERCASE) is unique building block in getting info which type of action was dispatched and what we should do in the reducer.
store.dispatch({type: 'INC_COUNTER'}); 
store.dispatch({type: 'ADD_COUNTER', value: 10}); 
console.log(store.getState()); // 11? 0. why still zero? because we haven't added any logic to action

