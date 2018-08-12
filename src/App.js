import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./store/actions";
import "typeface-roboto";


import Menu from "./containers/menu/Menu";
import Karty from "./containers/Karty/Karty";
import OtwartaKarta from "./components/OtwartaKarta/OtwartaKarta";
import styled from "styled-components"

class App extends Component {
  render() {
    return (
      <Apps>
        <Menu />
        {this.props.kartaJestOtwarta ? null : <Karty />}
        {this.props.kartaJestOtwarta ? (
          <OtwartaKarta
          taKartaJestOtwarta={this.props.otwartaKarta}
            key={this.props.otwartaKarta.id}
            id={this.props.otwartaKarta.id}
            numerKuta={this.props.otwartaKarta.numerKuta}
            wykonawca={this.props.otwartaKarta.wykonawca}
            marka={this.props.otwartaKarta.marka}
            nrRej={this.props.otwartaKarta.nrRej}
            wlasciciel={this.props.otwartaKarta.wlasciciel}
            terminWykonania={this.props.otwartaKarta.terminWykonania}
            zadanie={this.props.otwartaKarta.zadanie}
            wystawiajacy={this.props.otwartaKarta.wystawiajacy}
            opis={this.props.otwartaKarta.opis}
            uwagi={this.props.otwartaKarta.uwagi}
            typ={this.props.otwartaKarta.typ}
            podstawa={this.props.otwartaKarta.podstawa}
            pobierajacy={this.props.otwartaKarta.pobierajacy}
            waznoscKarty={this.props.otwartaKarta.waznoscKarty}
            kartaJestOtwarta={this.props.kartaJestOtwarta}
            dodajCzynnosc={this.props.dodajCzynnosc}
            CzCzynnosci={this.props.otwartaKarta.CzCzynnosci}         
            kartaZdana={this.props.otwartaKarta.kartaZdana}         
          />
        ) : console.log('asdasd')}
      </Apps>
    );
  }
}

const Apps = styled.div`


`

const mapStateToProps = state => {
  return {
    kartaJestOtwarta: state.kartaJestOtwarta,
    otwartaKarta: state.otwartaKarta
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddNewKut: () => dispatch(actions.addNewKut())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
