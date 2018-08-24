import * as actionTypes from "./actionTypes";

export const addNewKut = (
  numerKuta,
  id,
  wykonawca,
  marka,
  nrRej,
  wlasciciel,
  terminWykonania,
  zadanie,
  wystawiajacy,
  opis,
  uwagi,
  typ,
  podstawa,
  pobierajacy,
  waznoscKarty,
  dataZdania,
  buttonIsClicked,
  buttonDisable,
  CzCzynnosci,
  kartaZdana,
  rodzajRBH,
  iloscRBH,
  iloscSprzetuRBH,
  RBH
) => {
  console.log(rodzajRBH, iloscRBH, iloscSprzetuRBH);
  return {
    type: actionTypes.ADD_KUT,
    numerKuta: numerKuta,
    id: id,
    wykonawca: wykonawca,
    marka: marka,
    nrRej: nrRej,
    wlasciciel: wlasciciel,
    terminWykonania: terminWykonania,
    zadanie: zadanie,
    wystawiajacy: wystawiajacy,
    opis: opis,
    uwagi: uwagi,
    typ: typ,
    podstawa: podstawa,
    pobierajacy: pobierajacy,
    waznoscKarty: waznoscKarty,
    dataZdania: dataZdania,
    buttonIsClicked: buttonIsClicked,
    buttonDisable: buttonDisable,
    CzCzynnosci: CzCzynnosci,
    kartaZdana: kartaZdana,
    rodzajRBH: rodzajRBH,
    iloscRBH: iloscRBH,
    iloscSprzetuRBH: iloscSprzetuRBH
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
