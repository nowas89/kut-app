import React from "react";
import styled from "styled-components";

import Button from "../UI/Button/Button"

const dodajCzynnosc = props => {

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();
    
    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    } 
    today = dd + '/' + mm + '/' + yyyy;

  return (
    <div>
      <label>
        Operacja, czynność
        <input type="text" name="karta" />
      </label>
      <label>
        Zużto RBG
        <input type="number" name="karta" />
      </label>
      <label>
       Data Wykonania
        <input type="text" name="karta" 
       defaultValue={today}
        />
      </label>
      <label>
        Wykonawca Nazwisko
        <input type="text" name="karta" />
      </label>
      <h5>
          Zużycie części i materiałów
      </h5>
      <label>
        Wyszczególnienie
        <input type="text" name="karta" />
      </label>
      <label>
       Oznaczenie Katalogowe
        <input type="text" name="karta" />
      </label>
      <label>
        Ilość
        <input type="number" name="karta" />
      </label>
      <label>
        Nr. Asygnaty
        <input type="text" name="karta" />
      </label>
      <label>
        Uwagi
        <input type="text" name="karta" />
      </label>
      <Button val={"Zapisz czynność"} />
    </div>
  
  );
};

// const ButtonUi = styled.button`

// `

export default dodajCzynnosc;
