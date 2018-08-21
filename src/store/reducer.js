import * as actionTypes from "./actionTypes";

const initialState = {
  karty: [],
  buttonIsClicked: false,
  buttonDisable: false,
  otwartakarta: {},
  kartaJestOtwarta: false,
  wersja: "0.1.2",
  akronim: ''
};

export const addNewKut = (state, action) => {
  const nowaKarta = [...state.karty];

  console.log(action.CzCzynnosci);
  nowaKarta.push(
    (action.id = {
      numerKuta: action.numerKuta  === ""
      ? "----------"
      : action.numerKuta ,
      id: action.id,
      wykonawca: action.wykonawca  === ""
      ? "----------"
      :action.wykonawca,
      marka: action.marka  === ""
      ? "----------"
      : action.marka,
      nrRej: action.nrRej  === ""
      ? "----------"
      :action.nrRej,
      wlasciciel: action.wlasciciel  === ""
      ? "----------"
      :action.wlasciciel ,
      terminWykonania: action.terminWykonania  === ""
      ? "----------"
      : action.terminWykonania ,
      zadanie: action.zadanie  === ""
      ? "----------"
      : action.zadanie,
      wystawiajacy: action.wystawiajacy  === ""
      ? "----------"
      : action.wystawiajacy,
      opis: action.opis  === ""
      ? "----------"
      : action.opis,
      uwagi: action.uwagi  === ""
      ? "----------"
      : action.uwagi,
      typ: action.typ  === ""
      ? "----------"
      : action.typ,
      podstawa: action.podstawa  === ""
      ? "----------"
      : action.podstawa,
      pobierajacy: action.pobierajacy  === ""
      ? "----------"
      : action.pobierajacy,
      dataZdania: action.dataZdania  === ""
      ? "----------"
      : action.dataZdania,
      waznoscKarty: action.waznoscKarty ,
      CzCzynnosci: action.CzCzynnosci,
      kartaZdana: action.kartaZdana
    })
  );
  console.log('ADD NEW KUT', nowaKarta);
  return {
    ...state,
    karty: nowaKarta,
    buttonIsClicked: false,
    buttonDisable: false
  };
};
export const addNewCzynnosc = (state, action) => {
  console.log('[aaddNewCzynnosc]', action);
  return {
    ...state
  };
};

export const buttonKlicked = (state, action) => {
  console.log(action);
  return {
    ...state,
    buttonIsClicked: !action.btnIsClicked,
    buttonDisable: !action.btnIsDisabled
  };
};

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
    CzCzynnosci: action.karta.CzCzynnosci,
    kartaZdana: action.karta.kartaZdana,
    dataZdania: action.karta.dataZdania
    
  }


  console.log('[open kut]', nowOtwartaKarta);

  return {
    ...state,
    otwartaKarta: nowOtwartaKarta,
    kartaJestOtwarta: true
  };
};

export const zamykanieKarty = (state, action) => {





  const uaktualnionaListaKart = state.karty.map(item => {

  
    if (item.id === action.taKartaJestOtwarta.id) {
      return {
        ...action.taKartaJestOtwarta,
        zaaktualizowany: true
      };
    } else {
      return item;
    }})
    console.log(action.taKartaJestOtwarta)
  console.log(uaktualnionaListaKart)

  return {
    ...state,
    kartaJestOtwarta: !action.zamknij,
    karty: uaktualnionaListaKart
  };
};

export const usuwanieKarty = (state, action) => {

console.log(action.karta.numerKuta)
let arrayAfterDelete = state.karty.filter(item => item.numerKuta !== action.karta.numerKuta)

console.log(arrayAfterDelete)

return{
  ...state,
  karty: arrayAfterDelete,
  kartaJestOtwarta: false
  };
};


export const saveAcronim = (state, action) => {

console.log(action.akronim)


return{
  ...state,
  akronim: action.akronim,
  kartaJestOtwarta: false

};
}
const reducer = (state = initialState, action) => {
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
    case actionTypes.USUWANIE_KARTY:
      return usuwanieKarty(state, action);
    case actionTypes.ZAPISZ_AKRONIM:
      return saveAcronim(state, action);
    default:
      return state;
  }
};

export default reducer;
