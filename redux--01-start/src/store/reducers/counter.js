import * as actionTypes from './actions';

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.INCREMENT:
          const newState = Object.assign({}, state); // (1) Object.assign() - you can clone the object in immutable way
          newState.counter = state.counter + 1;
          return newState; // technically new object
      case  actionTypes.DECREMENT:
        return {
          ...state, // (2) spread operator - take all the props and values and distribute to *new* object & additional properties
          counter: state.counter - 1
        }
      case actionTypes.ADD:
        return {
          ...state,
          counter: state.counter + action.number
        }
      case actionTypes.SUBTRACT:
        return {
          ...state,
          counter: state.counter - action.number
        }
  }
  return state;
}
export default reducer;