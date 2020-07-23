import * as actionTypes from './actions';

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.STORE_RESULT:
        return {
          ...state,
          results: state.results.concat({id: new Date(), value: action.result})
        }
      case actionTypes.DELETE_RESULT:
        // ways of creating immutable array (1)
        // const id = 2;
        // const newArray = [...state.results]
        // newArray.splice(id, 1) 
        const updatedArray = state.results
          .filter(result => result.id !== action.resultElId); //(2)
        return {
          ...state,
          results: updatedArray
        }
  }
  return state; // RETURN CURRUENT STATE
}
export default reducer;