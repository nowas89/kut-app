import * as actionTypes from "./actionTypes";

const initialState = {
karty: []
};


export const addNewKut = (state, action) => {
    return {
      ...state
    };
  };



const reducer =  (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_KUT:
          return addNewKut(state, action);
        default:
          return state;
      }
}

export default reducer;