import * as actionTypes from "./actionTypes";

export const addNewKut = (numerKuta, id, wykonawca, marka, nrRej, wlasciciel, terminWykonania, zadanie,wystawiajacy,opis,uwagi, typ, podstawa, pobierajacy, waznoscKarty, buttonIsClicked,
    buttonDisable, CzCzynnosci, kartaZdana) => {
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
        buttonIsClicked: buttonIsClicked,
    buttonDisable: buttonDisable,
    CzCzynnosci: CzCzynnosci,
    kartaZdana: kartaZdana
    
    };
};
export const addNewCzynnosc = (operacja,
    rbh,
    dataWyk,
    wykonawca,
    wyszczegolnienie,
    oznaczenie,
    asygnata,
    ilosc,
    uwagi,
czynnosci) => {
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


export const openKut = (karta) => {
    return {
        type: actionTypes.OPEN_KUT,
        karta: karta
    }
}
export const zamykanieKarty = (zamknij, taKartaJestOtwarta) => {
    return {
        type: actionTypes.ZAMYKANIE_KARTY,
        
        zamknij: zamknij,
        taKartaJestOtwarta: taKartaJestOtwarta
    }
}