import * as actionTypes from "./actionTypes";

const initialState = {
karty: [],
buttonIsClicked: false,
buttonDisable: false
};


export const addNewKut = (state, action) => {

const nowaKarta = [...state.karty]

 console.log(action.CzCzynnosci)
       nowaKarta.push(
        action.id = {
          numerKuta: action.numerKuta,
          id: action.id,
          wykonawca: action.wykonawca,
          marka: action.marka,
          nrRej: action.nrRej,
          wlasciciel: action.wlasciciel,
          terminWykonania: action.terminWykonania,
          zadanie: action.zadanie,
          wystawiajacy: action.wystawiajacy,
          opis: action.opis,
          uwagi: action.uwagi,
          typ: action.typ, 
          podstawa: action.podstawa, 
          pobierajacy: action.pobierajacy, 
          waznoscKarty: action.waznoscKarty,
          CzCzynnosci: action.CzCzynnosci
         }
       )
console.log(nowaKarta)
    return {
      ...state,
      karty: nowaKarta,
      buttonIsClicked: false,
buttonDisable: false
      
    };
  };
export const addNewCzynnosc = (state, action) => {
  console.log(action)
    return {
      ...state
    };
  };



  
 export const buttonKlicked = (state, action) => {
console.log(action)
return{
  ...state,
  buttonIsClicked: !action.btnIsClicked,
  buttonDisable: !action.btnIsDisabled

}

 }


const reducer =  (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_KUT:
          return addNewKut(state, action);
        case actionTypes.ADD_NEW_CZYNNOSC:
          return addNewCzynnosc(state, action);
        case actionTypes.ON_ADDING_KUT:
          return buttonKlicked(state, action);
        default:
          return state;
      }
}

export default reducer;