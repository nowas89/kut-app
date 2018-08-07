import * as actionTypes from "./actionTypes";

export const addNewKut = (numerKuta, id, wykonawca, marka, nrRej, wlasciciel, terminWykonania, zadanie,wystawiajacy,opis,uwagi, typ, podstawa, pobierajacy, waznoscKarty, buttonIsClicked,
    buttonDisable) => {
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
    buttonDisable: buttonDisable
    
    };
};
export const addNewCzynnosc = (operacja,
    rbg,
    dataWyk,
    wykonawca,
    wyszczegolnienie,
    oznaczenie,
    asygnata,
    ilosc,
    uwagi,
id) => {
    return {
        type: actionTypes.ADD_NEW_CZYNNOSC,
        rbg: rbg,
        dataWyk: dataWyk,
        wykonawca: wykonawca,
        wyszczegolnienie: wyszczegolnienie,
        oznaczenie: oznaczenie,
        asygnata: asygnata,
        ilosc: ilosc,
        uwagi: uwagi,
        id: id
    };
};
export const buttonKlicked = (btnIsClicked, btnIsDisabled, id) => {
    return {
        type: actionTypes.ON_ADDING_KUT,
        btnIsClicked: btnIsClicked,
        btnIsDisabled: btnIsDisabled,
        id: id
    };
};