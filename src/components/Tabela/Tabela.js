import React, { Component } from "react";

import { connect } from "react-redux";

import "./table.css";

import TabelaRow from "./TabelaRow";

class Tabela extends Component {



    render () {


        
  return (
  <div className="table" >
   <div className="theader">
     <div className="table_header">Numer Karty</div>
     <div className="table_header">Marka i typ sprzętu</div>
     <div className="table_header">Nr. rejestracyjny</div>
     <div className="table_header">Sprzet należy do</div>
     <div className="table_header">Data wystawienia karty</div>
     <div className="table_header">Zadanie</div>
     <div className="table_header">Pobierający</div>
   </div>
   {this.props.karty.map(karta => (
     <TabelaRow key={karta.id}
       numerKuta={karta.numerKuta}
       marka={karta.marka}
       nrRej={karta.nrRej}
       wlasciciel={karta.wlasciciel}
       terminWykonania={karta.terminWykonania}
       zadanie={karta.zadanie}
       pobierajacy={karta.pobierajacy}
     />
   ))}
 </div>

  )}
};

const mapStateToProps = state => {
  return {
    karty: state.karty
  };
};

const mapDispatchToProps = dispatch => {
  return {
   
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabela);
