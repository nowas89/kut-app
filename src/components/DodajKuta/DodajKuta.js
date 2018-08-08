import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import styled from "styled-components";

import Button from "../UI/Button/Button";
// import DodajCzynnosc from "../DodajCzynnosc/DodajCzynnosc"


class DodajKuta extends Component {
  state = {
    numerKuta: null,
    id: this.props.karty.length + 1,
    dodajCzynnosc: false,
    CzCzynnosci: [],
    wykonawca: '',
    marka: '',
    nrRej: '',
    wlasciciel: '',
    terminWykonania:
      new Date().getDate() +
      "/" +
      (new Date().getMonth() + 1) +
      "/" +
      new Date().getFullYear(),
    zadanie: '',
    wystawiajacy: '',
    opis: '',
    uwagi: '',
    typ: '',
    podstawa: '',
    waznoscKarty:   new Date().getDate() +
    "/" +
    (new Date().getMonth() + 1) +
    "/" +
    new Date().getFullYear(),
    pobierajacy: '',

    CzOperacja: '',
    CzRgb: '',
    CzDataWyk:   new Date().getDate() +
    "/" +
    (new Date().getMonth() + 1) +
    "/" +
    new Date().getFullYear(),
    CzWykonawca: '',
    CzWyszczegolnienie: '',
    CzOznaczenie: '',
    CzIlosc: '',
    CzAsygnata: '',
    CzUwagi: ''
   
    
    
  };

componentWillUnmount() {
  this.setState({
    numerKuta: null,
    id: this.props.karty.length + 1,
    wykonawca: '',
    marka: '',
    nrRej: '',
    wlasciciel: '',
    terminWykonania:
      new Date().getDate() +
      "/" +
      (new Date().getMonth() + 1) +
      "/" +
      new Date().getFullYear(),
    zadanie: '',
    wystawiajacy: '',
    opis: '',
    uwagi: '',
    typ: '',
    podstawa: '',
    waznoscKarty: '',
    pobierajacy: ''

  })
}

  componentDidMount() {

      this.setState({
        id: this.props.karty.length + 1,
        numerKuta: this.state.id + " / wł / " + new Date().getFullYear()
      })
  }

  onClickAction = () => {
    if (!this.state.dodajCzynnosc) {
      this.setState({ dodajCzynnosc: true });

    }
  };

  addWykonawca = e => {
    this.setState({
      wykonawca: e.target.value
    });
  };
  addMarka = e => {
    this.setState({
      marka: e.target.value
    });
  };
  addNrRej = e => {
    this.setState({
      nrRej: e.target.value
    });
  };
  addTerminWYkonania = e => {
    this.setState({
      terminWykonania: e.target.value
    });
  };
  addZadanie = e => {
    this.setState({
      zadanie: e.target.value
    });
  };
  addWystawiajacy = e => {
    this.setState({
      wystawiajacy: e.target.value
    });
  };
  addOpis = e => {
    this.setState({
      opis: e.target.value
    });
  };
  addUwagi = e => {
    this.setState({
      uwagi: e.target.value
    });
  };
  addWlasciciel = e => {
    this.setState({
      wlasciciel: e.target.value
    });
  };
  addTyp = e => {
    this.setState({
      typ: e.target.value
    });
  };
  addPodstawa = e => {
    this.setState({
      podstawa: e.target.value
    });
  };
  addWaznoscKarty = e => {
    this.setState({
      waznoscKarty: e.target.value
    });
  };
  addPobierajacy = e => {
    this.setState({
      pobierajacy: e.target.value
    });
  };

  // dodaj czynnosc

  addCzOperacja = e => {
    this.setState({
      CzOperacja: e.target.value
    });
  };
  addCzRgb = e => {
    this.setState({
      CzRgb: e.target.value
    });
  };
  addCzDataWyk = e => {
    this.setState({
      CzDataWyk: e.target.value
    });
  };
  addCzWykonawca = e => {
    this.setState({
      CzWykonawca: e.target.value
    });
  };
  addCzWyszczegolnienie = e => {
    this.setState({
      CzWyszczegolnienie: e.target.value
    });
  };
  addCzOznaczenie = e => {
    this.setState({
      CzOznaczenie: e.target.value
    });
  };
  addCzIlosc = e => {
    this.setState({
      CzIlosc: e.target.value
    });
  };
  addCzAsygnata = e => {
    this.setState({
      CzAsygnata: e.target.value
    });
  };
  addCzUwagi = e => {
    this.setState({
      CzUwagi: e.target.value
    });
  };
  dispatchAndAndResetCzynnosc = () => {


let nowyItemCaly = this.state.CzCzynnosci.concat({
  CzOperacja: this.state.CzOperacja,
  CzRgb:    this.state.CzRgb,
  CzDataWyk:    this.state.CzDataWyk,
  CzWykonawca:    this.state.CzWykonawca,
  CzWyszczegolnienie:   this.state.CzWyszczegolnienie,
  CzOznaczenie:   this.state.CzOznaczenie,
  CzIlosc:   this.state.CzIlosc,
  CzAsygnata:    this.state.CzAsygnata,
  CzUwagi:   this.state.CzUwagi}
)

 this.setState({
   
CzCzynnosci: [...nowyItemCaly]
})

console.log(this.state.CzCzynnosci)
 
  //     this.props.onAddNewCzynnosc(
  //     this.state.CzOperacja,
  //     this.state.CzRgb,
  //     this.state.CzDataWyk,
  //     this.state.CzWykonawca,
  //     this.state.CzWyszczegolnienie,
  //     this.state.CzOznaczenie,
  //     this.state.CzIlosc,
  //     this.state.CzAsygnata,
  //     this.state.CzUwagi,
  //     this.state.dodajCzynnosc
  //  )
      
setTimeout(() => {
  this.setState({
    CzOperacja: '',
    CzRgb: '',
    CzDataWyk: '',
    CzWykonawca: '',
    CzWyszczegolnienie: '',
    CzOznaczenie: '',
    CzIlosc: '',
    CzAsygnata: '',
    CzUwagi: '',

   dodajCzynnosc: false,
    

  })
}, 500);

  };
  dispatchAndResetNowaKarta = () => {

    this.props.onAddNewKut(
      this.state.numerKuta,
      this.state.id,
      this.state.wykonawca,
      this.state.marka,
      this.state.nrRej,
      this.state.wlasciciel,
      this.state.terminWykonania,
      this.state.zadanie,
      this.state.wystawiajacy,
      this.state.opis,
      this.state.uwagi,
      this.state.typ,
      this.state.podstawa,
      this.state.pobierajacy,
      this.state.waznoscKarty,
      this.props.buttonIsClicked,
      this.props.buttonDisable,
      this.state.CzCzynnosci
    )


  };




  render() {


    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }
    today = dd + "/" + mm + "/" + yyyy;



    return (
      <Wrapper>
        <form>
          <label>
            Numer Karty Usług Technicznych
            <input
              type="text"
              name="numerKuta"
              placeholder="numer"
              defaultValue={this.state.numerKuta}
              autoComplete="on"
            />
          </label>
          <label>
            Wykonawca
            <input
              type="text"
              name="wykonawca"
              defaultValue={this.state.wykonawca}
              autoComplete="on"
              onChange={e => this.addWykonawca(e)}

            />
          </label>
          <label>
            Marka i typ sprzętu:
            <input
              type="text"
              name="typ"
              defaultValue={this.state.marka}
              autoComplete="on"
              onChange={e => this.addMarka(e)}
            />
          </label>
          <label>
            Typ UiSw:
            <input
              type="text"
              name="rodzaj"
              defaultValue={this.state.typ}
              autoComplete="on"
              onChange={e => this.addTyp(e)}
            />
          </label>
          <label>
            Podstawa wydania:
            <input
              type="text"
              name="podstawa"
              defaultValue={this.state.podstawa}
              autoComplete="on"
              onChange={e => this.addPodstawa(e)}
            />
          </label>
          <label>
            Nr. rejestracyjny sprzętu:
            <input
              type="text"
              name="rejestracja"
              defaultValue={this.state.nrRej}
              autoComplete="on"
              onChange={e => this.addNrRej(e)}
            />
          </label>
          <label>
            Sprzęt Należy do:
            <input
              type="text"
              name="wlasciciel"
              defaultValue={this.state.wlasciciel}
              autoComplete="on"
              onChange={e => this.addWlasciciel(e)}
            />
          </label>
          <label>
            Termin wykonania
            <input
              type="text"
              name="terminwykonania"
              defaultValue={this.state.terminWykonania}
              autoComplete="on"
              onChange={e => this.addTerminWYkonania(e)}
            />
          </label>
          <label>
            Data ważności karty
            <input
              type="text"
              name="karta"
              defaultValue={this.state.waznoscKarty}
              autoComplete="on"
              onChange={e => this.addWaznoscKarty(e)}
            />
          </label>
          <label>
            Zadanie:
            <input
              type="text"
              name="zadanie"
              defaultValue={this.state.zadanie}
              autoComplete="on"
              onChange={e => this.addZadanie(e)}
            />
          </label>
          <label>
            Kartę wystawił
            <input
              type="text"
              name="wystawiajacy"
              defaultValue={this.state.wystawiajacy}
              autoComplete="on"
              onChange={e => this.addWystawiajacy(e)}
            />
          </label>
          <br />
          <br />
          <br />
          <label>
            W czasie defektacji (Badań diagnostycznych) stwierdzono Konieczność
            wykonania następujących prac:
            <textarea
              type="text"
              name="opis"
              defaultValue={this.state.opis}
              autoComplete="on"
              onChange={e => this.addOpis(e)}
            />
          </label>
          <label>
            UWAGI PRZYJMUJĄCEGO
            <textarea
              type="text"
              name="uwagi"
              defaultValue={this.state.uwagi}
              autoComplete="on"
              onChange={e => this.addUwagi(e)}
            />
          </label>
          <label>
            Karte Pobrał
            <input
              type="text"
              name="pobierajacy"
              defaultValue={this.state.pobierajacy}
              autoComplete="on"
              onChange={e => this.addPobierajacy(e)}
            />
          </label>
          <br />
          <br />
          <br />
          <h4>Rozliczenie wykonania zadania</h4>
        </form>

        <Button val={"Dodaj Czynność"} clicked={this.onClickAction} />
        {this.state.dodajCzynnosc ? (
          <div>
            <label>
              Operacja, czynność
              <input
                type="text"
                name="karta"
                defaultValue={this.state.CzOperacja}
                onChange={e => this.addCzOperacja(e)}
                
              />
            </label>
            <label>
              Zużyto Roboczo Godzin
              <input
                type="number"
                name="karta"
                defaultValue={this.state.CzRgb}
                onChange={e => this.addCzRgb(e)}
              />
            </label>
            <label>
              Data Wykonania
              <input
                type="text"
                name="karta"
                defaultValue={this.state.CzDataWyk}
                onChange={e => this.addCzDataWyk(e)}
              />
            </label>
            <label>
              Wykonawca Nazwisko
              <input
                type="text"
                name="karta"
                defaultValue={this.state.CzWykonawca}
                onChange={e => this.addCzWykonawca(e)}
              />
            </label>
            <h5>Zużycie części i materiałów</h5>
            <label>
              Wyszczególnienie
              <input
                type="text"
                name="karta"
                defaultValue={this.state.CzWyszczegolnienie}
                onChange={e => this.addCzWyszczegolnienie(e)}
              />
            </label>
            <label>
              Oznaczenie Katalogowe
              <input
                type="text"
                name="karta"
                defaultValue={this.state.CzOznaczenie}
                onChange={e => this.addCzOznaczenie(e)}
              />
            </label>
            <label>
              Ilość
              <input
                type="number"
                name="karta"
                defaultValue={this.state.CzIlosc}
                onChange={e => this.addCzIlosc(e)}
              />
            </label>
            <label>
              Nr. Asygnaty
              <input
                type="text"
                name="karta"
                defaultValue={this.state.CzAsygnata}
                onChange={e => this.addCzAsygnata(e)}
              />
            </label>
            <label>
              Uwagi
              <input
                type="text"
                name="karta"
                defaultValue={this.state.CzUwagi}
                onChange={e => this.addCzUwagi(e)}
              />
            </label>
            <Button
              val={"Zapisz czynność"}
              clicked={() => this.dispatchAndAndResetCzynnosc() }

            />
          </div>
        ) : null}



        {


          // (this.state.wykonawca.length < 2 ||
          // this.state.marka.length < 2 ||
          // this.state.nrRej.length < 2 ||
          // this.state.wlasciciel.length < 2 ||
          // this.state.zadanie.length < 2 ||
          // this.state.wystawiajacy.length < 2 ||
          // this.state.typ.length < 2 ||
          // this.state.podstawa.length < 2 ||
          // this.state.waznoscKarty.length < 2 ||
          // this.state.pobierajacy.length < 2) ? <h2>Uzupełnij Kartę aby móc ją zapisać</h2>   :
        
          // <Button
          //         val={"Zapisz Kartę"} typ={'submit'}
          //         clicked={() =>
          //        this.dispatchAndResetNowaKarta() }
          //       />
        
        
        }  


   <Button
val={"Zapisz Kartę"} typ={'submit'}
clicked={() =>
this.dispatchAndResetNowaKarta() }

/>
   
      </Wrapper>
    );
  }
}


const Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  min-height: 100%;
  outline: 1px red solid;
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
    karty: state.karty,
    buttonIsClicked: state.buttonIsClicked,
buttonDisable: state.buttonDisable
  };
};




const mapDispatchToProps = dispatch => {
  return {
    onAddNewKut: (
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
      buttonIsClicked,
      buttonDisable,
      CzCzynnosci
    ) =>
      dispatch(
        actions.addNewKut(
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
          buttonIsClicked,
          buttonDisable,
          CzCzynnosci
        )
      ),
    onAddNewCzynnosc: (
      operacja,
      rbg,
      dataWyk,
      wykonawca,
      wyszczegolnienie,
      oznaczenie,
      asygnata,
      ilosc,
      uwagi,
      CzCzynnosci
    ) =>
      dispatch(
        actions.addNewCzynnosc(
          operacja,
          rbg,
          dataWyk,
          wykonawca,
          wyszczegolnienie,
          oznaczenie,
          asygnata,
          ilosc,
          uwagi,
          CzCzynnosci
        )
      )
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DodajKuta);
