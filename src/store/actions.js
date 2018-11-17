import * as actionTypes from "./actionTypes";

export const addNewKut = (
  state
) => {
  return {
    type: actionTypes.ADD_KUT,
  state: state
  };
};
export const addNewCzynnosc = (
  operacja,
  rbh,
  dataWyk,
  wykonawca,
  wyszczegolnienie,
  oznaczenie,
  asygnata,
  ilosc,
  uwagi,
  czynnosci
) => {
  return {
    type: actionTypes.ADD_NEW_CZYNNOSC,
    rbh: rbh,
    dataWyk: dataWyk,
    wykonawca: wykonawca,
    wyszczegolnienie: wyszczegolnienie,
    oznaczenie: oznaczenie,
    asygnata: asygnata,
    ilosc: ilosc,
    uwagi: uwagi,
    czynnosci: czynnosci
  };
};
export const buttonKlicked = (btnIsClicked, btnIsDisabled) => {
  return {
    type: actionTypes.ON_ADDING_KUT,
    btnIsClicked: btnIsClicked,
    btnIsDisabled: btnIsDisabled
  };
};

export const openKut = karta => {
  console.log(karta);
    
  return {
    type: actionTypes.OPEN_KUT,
    karta: karta
  };
};


export const zamykanieKarty = (zamknij, taKartaJestOtwarta) => {
  return {
    type: actionTypes.ZAMYKANIE_KARTY,

    zamknij: zamknij,
    taKartaJestOtwarta: taKartaJestOtwarta
  };
};
export const usuwanieKarty = karta => {
  return {
    type: actionTypes.USUWANIE_KARTY,

    karta: karta
  };
};
export const saveAcronim = akronim => {
  return {
    type: actionTypes.ZAPISZ_AKRONIM,

    akronim: akronim
  };
};
export const saveRodzajRBH = typRBH => {
  return {
    type: actionTypes.ZAPISZ_TYP,

    typRBH: typRBH
  };
};
export const deleteRodzajRBH = typRBH => {
  return {
    type: actionTypes.USUN_TYP,

    typRBH: typRBH
  };
};
export const Anulowanie = () => {
  return {
    type: actionTypes.ANULOWANIE
  };
};
export const nowyNumerKarty = (nowyNumer) => {
  return {
    type: actionTypes.NOWY_NUMER,
    nowyNumer: nowyNumer
  };
};
export const resetState = () => {
  return {
    type: actionTypes.RESET

  };
};
export const editCzynnosc = (cz) => {
  return {
    type: actionTypes.EDIT_CZYNNOSC,
    
    czynnosc: cz

  };
};
export const aktualizacjaCzynnosci = (karta) => {
  return {
    type: actionTypes.AKTUALIZACJA_CZYNNOSCI,
    
    karta: karta

  };
};
