import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions"


import styled from "styled-components";

import Button from "../UI/Button/Button"
import DodajCzynnosc from "../DodajCzynnosc/DodajCzynnosc"

class DodajKuta extends Component {


    state = {
      dodajCzynnosc: false,
      karty : []
      }
      
      
      onClickAction = () => {

        if(!this.state.dodajCzynnosc) {
          this.setState({ dodajCzynnosc: true })
          this.state.karty.push({id: this.state.karty.length + 1})
          console.log(this.state.karty)
        }else {
          this.setState({ dodajCzynnosc: false })
        }
      }
      render () {

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
    <Wrapper>
      <form>
        <label>
          Numer Karty Usług Technicznych
          <input type="number" name="karta" placeholder="numer" />
        </label>
        <label>
          Wykonawca
          <input type="text" name="karta" placeholder=" wykonawca" />
        </label>
        <label>
          Marka i typ sprzętu:
          <input type="text" name="karta" placeholder=" Marka i typ sprzętu" />
        </label>
        <label>
          Nr. rejestracyjny sprzętu:
          <input
            type="text"
            name="karta"
            placeholder=" Nr. rejestracyjny sprzętu"
          />
        </label>
        <label>
          Sprzęt Należy do:
          <input type="text" name="karta" placeholder=" Sprzęt Należy do:" />
        </label>
        <label>
          Termin wykonania
          <input type="text" name="karta" defaultValue={today}/>
        </label>
        <label>
          Zadanie:
          <input type="text" name="karta" placeholder=" Zadanie:" />
        </label>
        <label>
          Kartę wystawił
          <input type="text" name="karta" defaultValue={today}  />
        </label>
        <br />
        <br />
        <br />
        <label>
          W czasie defektacji (Badań diagnostycznych) stwierdzono Konieczność
          wykonania następujących prac:
          <textarea type="text" name="karta" placeholder="Opis. . . " />
        </label>
        <label>
          UWAGI PRZYJMUJĄCEGO
          <textarea type="text" name="karta" placeholder="Opis. . . " />
        </label>
        <br />
        <br />
        <br />
        <h4>Rozliczenie wykonania zadania</h4>
        
      </form>
  
<Button val={'Dodaj Czynność'} clicked={this.onClickAction}/>
            {
             this.state.dodajCzynnosc ? <DodajCzynnosc /> : null
           }

 
    </Wrapper>
  );
}
};

const Wrapper = styled.div`
  margin-top: 40px;

  width: 80%;
  min-height: 100%;
  label {
    padding: 5px;
    display: flex;
    flex-direction: column;
  }
  input {
    width: 200px;
  }
`;



const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddNewKut: () => dispatch(actions.addNewKut())

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DodajKuta);