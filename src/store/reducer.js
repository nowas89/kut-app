import * as actionTypes from "./actionTypes";

const initialState = {
  karty: [],
  buttonIsClicked: false,
  buttonDisable: false,
  otwartakarta: {},
  kartaJestOtwarta: false,
  wersja: "1.1.1",
  akronim: "",
  rodzajRBH: [],
  nowyNumerKuta: false,
  ostatniNumer: 0,
  defWykonawca: "",
  defWystawiajacy: "",
  edytowanaCz: {},
  editOperacji: true,
  zdaneKarty: false,
  persons: []
};

export const addNewKut = (state, action) => {
  const nowaKarta = [...state.karty];

  nowaKarta.push(
    (action.state.id = {
      numerKuta: action.state.numerKuta,
      id: action.state.id,
      numer: action.state.numer,
      wykonawca: action.state.wykonawca,
      marka: action.state.marka === "" ? "- - -" : action.state.marka,
      nrRej: action.state.nrRej === "" ? "- - -" : action.state.nrRej,
      wlasciciel:
        action.state.wlasciciel === "" ? "- - -" : action.state.wlasciciel,
      terminWykonania:
        action.state.terminWykonania === ""
          ? "- - -"
          : action.state.terminWykonania,
      zadanie:
        action.state.zadanie === "" ? "- - -" : action.state.zadanie,
      wystawiajacy:
        action.state.wystawiajacy === ""
          ? "- - -"
          : action.state.wystawiajacy,
      opis: action.state.opis === "" ? "- - -" : action.state.opis,
      uwagi: action.state.uwagi === "" ? "- - -" : action.state.uwagi,
      typ: action.state.typ === "" ? "- - -" : action.state.typ,
      podstawa:
        action.state.podstawa === "" ? "- - -" : action.state.podstawa,
      pobierajacy:
        action.state.pobierajacy === ""
          ? "- - -"
          : action.state.pobierajacy,
      dataZdania:
        action.state.dataZdania === "" ? "- - -" : action.state.dataZdania,
      waznoscKarty: action.state.waznoscKarty,
      CzCzynnosci: action.state.CzCzynnosci,
      kartaZdana: action.state.kartaZdana,
      rodzajRBH: action.state.rodzajRBH,
      iloscRBH: action.state.iloscRBH,
      iloscSprzetuRBH: action.state.iloscSprzetuRBH,
      edytowaneCz: action.state.edytowaneCz
    })
  );

  return {
    ...state,
    karty: nowaKarta,
    buttonIsClicked: false,
    buttonDisable: false,
    ostatniNumer: action.state.ostatniNumer,
    defWykonawca: action.state.defWykonawca,
    defWystawiajacy: action.state.defWystawiajacy
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
  console.log(action);
  console.log(action.karta);
  const nowOtwartaKarta = {
    numerKuta: action.karta.numerKuta,
    numer: action.karta.numer,
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

  return {
    ...state,
    rodzajRBH: addRbhTyp
  };
};
export const deleteRodzajRBH = (state, action) => {
  let deleteTyp = state.rodzajRBH.filter(item => item !== action.typRBH);
  console.log(deleteTyp);

  return {
    ...state,
    rodzajRBH: deleteTyp
  };
};
export const Anulowanie = (state, action) => {
  return {
    ...state,
    buttonIsClicked: false,
    buttonDisable: false
  };
};

export const nowyNumerKarty = (state, action) => {
  let aktualizacjaNumeru;
  let nowyNumer;
  if (action.nowyNumer > 0) {
    aktualizacjaNumeru = true;
    nowyNumer = action.nowyNumer;
  } else {
    aktualizacjaNumeru = false;
    nowyNumer = state.ostatniNumer;
  }
  console.log(aktualizacjaNumeru);
  console.log(nowyNumer);

  return {
    ...state,
    nowyNumerKuta: aktualizacjaNumeru,
    ostatniNumer: nowyNumer
  };
};
export const resetState = (state, action) => {
  return {
    karty: [],
    buttonIsClicked: false,
    buttonDisable: false,
    otwartakarta: {},
    kartaJestOtwarta: false,
    wersja: "1.0.4",
    akronim: "",
    rodzajRBH: [],
    nowyNumerKuta: false,
    ostatniNumer: 0
  };
};
export const editCzynnosc = (state, action) => {


  return {
    ...state,
    edytowanaCz: action.czynnosc,
    editOperacji: !state.editOperacji
  };
};

export const aktualizacjaCzynnosci = (state, action) => {
  
  return {
    ...state,
    editOperacji: !state.editOperacji
  };
};

export const zdanKarty = (state, action)  => {
  console.log(action.e.target.checked )
  return {
    ...state,
  zdaneKarty: action.e.target.checked }
};

export const  deletePerson = (state, action)  => {
  console.log(action.e.target )
  let deleteTyp = state.persons.filter(item => item !== action.e);
  console.log(deleteTyp);

  return {
    ...state,
    persons: deleteTyp
  };
};

export const savePerson = (state, action)  => {
  console.log(action.e.target )
  let persDel = state.persons.concat(action.e);

  return {
    ...state,
    persons: persDel
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
    case actionTypes.ANULOWANIE:
      return Anulowanie(state, action);
    case actionTypes.NOWY_NUMER:
      return nowyNumerKarty(state, action);
    case actionTypes.RESET:
      return resetState(state, action);
    case actionTypes.EDIT_CZYNNOSC:
      return editCzynnosc(state, action);
    case actionTypes.AKTUALIZACJA_CZYNNOSCI:
      return aktualizacjaCzynnosci(state, action);
    case actionTypes.ZDANE_KARTY:
      return zdanKarty(state, action);
    case actionTypes.DELETE_PERSON:
      return deletePerson(state, action);
    case actionTypes.SAVE_PERSON:
      return savePerson(state, action);
    default:
      return state;
  }
};

export default reducer;

// const uaktualnionaListaKart = state.karty.map(item => {
//   if (item.id === action.karta.id) {

//   action.karta.CzCzynnosci.map(czynnosc => {
//     if(czynnosc.CzOperacjaId === action.karta.edytowaneCz.editCzOperacjaId) {
//       return {
//         karta: {
// ...item,
// CzCzynnosci: {
// CzDataWyk:action.karta.edytowaneCz.editCzDataWyk
//        ,
//       CzOperacja: action.karta.edytowaneCz.editCzOperacja,
//       CzRbh: action.karta.edytowaneCz.editCzRbh,
//       CzWykonawca: action.karta.edytowaneCz.editCzWykonawca,
//       CzWyszczegolnienie: action.karta.edytowaneCz.editCzWyszczegolnienie,
//       CzOznaczenie: action.karta.edytowaneCz.editCzOznaczenie,
//       CzIlosc: action.karta.edytowaneCz.editCzIlosc,
//       CzAsygnata: action.karta.edytowaneCz.editCzAsygnata,
//       CzUwagi: action.karta.edytowaneCz.editCzUwagi
// }

//         }
//       }
//     } else { return item }
//   }
//   )}
//   else {
//     return item;
//   }
// })

// console.log(uaktualnionaListaKart)
