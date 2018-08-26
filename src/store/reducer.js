import * as actionTypes from "./actionTypes";

const initialState = {
  karty: [],
  buttonIsClicked: false,
  buttonDisable: false,
  otwartakarta: {},
  kartaJestOtwarta: false,
  wersja: "1.0.1",
  akronim: "",
  rodzajRBH: []
};

export const addNewKut = (state, action) => {
  const nowaKarta = [...state.karty];

  nowaKarta.push(
    (action.state.id = {
      numerKuta: action.state.numerKuta === "" ? "----------" : action.state.numerKuta,
      id: action.state.id,
      wykonawca: action.state.wykonawca === "" ? "----------" : action.state.wykonawca,
      marka: action.state.marka === "" ? "----------" : action.state.marka,
      nrRej: action.state.nrRej === "" ? "----------" : action.state.nrRej,
      wlasciciel: action.state.wlasciciel === "" ? "----------" : action.state.wlasciciel,
      terminWykonania:
        action.state.terminWykonania === "" ? "----------" : action.state.terminWykonania,
      zadanie: action.state.zadanie === "" ? "----------" : action.state.zadanie,
      wystawiajacy:
        action.state.wystawiajacy === "" ? "----------" : action.state.wystawiajacy,
      opis: action.state.opis === "" ? "----------" : action.state.opis,
      uwagi: action.state.uwagi === "" ? "----------" : action.state.uwagi,
      typ: action.state.typ === "" ? "----------" : action.state.typ,
      podstawa: action.state.podstawa === "" ? "----------" : action.state.podstawa,
      pobierajacy:
        action.state.pobierajacy === "" ? "----------" : action.state.pobierajacy,
      dataZdania: action.state.dataZdania === "" ? "----------" : action.state.dataZdania,
      waznoscKarty: action.state.waznoscKarty,
      CzCzynnosci: action.state.CzCzynnosci,
      kartaZdana: action.state.kartaZdana,
        rodzajRBH: action.state.rodzajRBH,
        iloscRBH: action.state.iloscRBH,
        iloscSprzetuRBH: action.state.iloscSprzetuRBH
      
    })
  );


  return {
    ...state,
    karty: nowaKarta,
    buttonIsClicked: false,
    buttonDisable: false
  };
};
export const addNewCzynnosc = (state, action) => {
  console.log("[aaddNewCzynnosc]", action);
  return {
    ...state
  };
};

export const buttonKlicked = (state, action) => {

  return {
    ...state,
    buttonIsClicked: !action.btnIsClicked,
    buttonDisable: !action.btnIsDisabled
  };
};

export const openKut = (state, action) => {

console.log( action)
console.log( action.karta)
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
    dataZdania: action.karta.dataZdania,
    iloscRBH: action.karta.iloscRBH,
    iloscSprzetuRBH: action.karta.iloscSprzetuRBH,
    rodzajRBH: action.karta.rodzajRBH
    
  };

  console.log("[open kut]", nowOtwartaKarta);

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
    }
  });
  console.log(action.taKartaJestOtwarta);
  console.log(uaktualnionaListaKart);

  return {
    ...state,
    kartaJestOtwarta: !action.zamknij,
    karty: uaktualnionaListaKart
  };
};

export const usuwanieKarty = (state, action) => {
  console.log(action.karta.numerKuta);
  let arrayAfterDelete = state.karty.filter(
    item => item.numerKuta !== action.karta.numerKuta
  );

  console.log(arrayAfterDelete);

  return {
    ...state,
    karty: arrayAfterDelete,
    kartaJestOtwarta: false
  };
};

export const saveAcronim = (state, action) => {
  return {
    ...state,
    akronim: action.akronim,
    kartaJestOtwarta: false
  };
};
export const saveRodzajRBH = (state, action) => {
  let addRbhTyp = state.rodzajRBH.concat(action.typRBH);

  console.log(addRbhTyp);
  console.log(action.typRBH);
  console.log(state.rodzajRBH);

  return {
    ...state,
    rodzajRBH: addRbhTyp
  };
};
export const deleteRodzajRBH = (state, action) => {

  let deleteTyp = state.rodzajRBH.filter(
    item => item !== action.typRBH
  );
  console.log(deleteTyp)



  return {
    ...state,
    rodzajRBH: deleteTyp
  };
};
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
    case actionTypes.ZAPISZ_TYP:
      return saveRodzajRBH(state, action);
    case actionTypes.USUN_TYP:
      return deleteRodzajRBH(state, action);
    default:
      return state;
  }
};

export default reducer;
