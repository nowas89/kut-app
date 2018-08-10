import * as actionTypes from "./actionTypes";

const initialState = {
karty: [],
buttonIsClicked: false,
buttonDisable: false,
otwartakarta: {},
kartaJestOtwarta: false
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
          CzCzynnosci: action.CzCzynnosci,
          kartaZdana: action.kartaZdana
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


 export const openKut = (state, action) => {
const nowOtwartaKarta = {
  numerKuta: action.karta.numerKuta,
  id: action.karta.id,
  wykonawca: action.karta.wykonawca,
  marka: action.karta.marka,
  nrRej: action.karta.nrRej,
  wlasciciel: action.karta.wlasciciel,
  terminWykonania: action.karta.terminWykonania,
  zadanie: action.karta.zadanie,
  wystawiajacy: action.karta.wystawiajacy,
  opis: action.karta.opis,
  uwagi: action.karta.uwagi,
  typ: action.karta.typ, 
  podstawa: action.karta.podstawa, 
  pobierajacy: action.karta.pobierajacy, 
  waznoscKarty: action.karta.waznoscKarty,
  CzCzynnosci: action.karta.CzCzynnosci
}

console.log(nowOtwartaKarta)

return{
  ...state,
  otwartaKarta: nowOtwartaKarta,
  kartaJestOtwarta: true
}
}



export const zamykanieKarty = (state, action) => {

console.log(action.zamknij)

  return {
    ...state,
    kartaJestOtwarta: !action.zamknij
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
        case actionTypes.OPEN_KUT:
          return openKut(state, action);
        case actionTypes.ZAMYKANIE_KARTY:
          return zamykanieKarty(state, action);
        default:
          return state;
      }
}

export default reducer;