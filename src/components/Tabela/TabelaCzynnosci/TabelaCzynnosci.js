import React, { Component } from "react";

// import { connect } from "react-redux";

import "../table.css";

import RowCzynnosci from "./RowCzynnosci";

class TabelaCzynnosci extends Component {



    render () {


        
  return (
  <div className="table" >
   <div className="theader">
     <div className="table_header">Operacja, czynność</div>
     <div className="table_header">Zużyto RBH</div>
     <div className="table_header">Data wykonania</div>
     <div className="table_header">Wykonawca - Nazwisko</div>
     <div className="table_header">Wyszczególnienie</div>
     <div className="table_header">Nr. Indeksowy</div>
     <div className="table_header">Ilość</div>
     <div className="table_header">Nr. Asygnaty</div>
     <div className="table_header">Uwagi</div>
   </div>


   
   {/* {this.props.karty.CzCzynnosci.map(karta => (
     <RowCzynnosci key={karta.CzDataWyk}
     CzOperacja={karta.CzOperacja}
     CzRbh={karta.CzRbh}
     CzDataWyk={karta.CzDataWyk}
     CzWykonawca={karta.CzWykonawca}
       CzWyszczegolnienie={karta.CzWyszczegolnienie}
       CzOznaczenie={karta.CzOznaczenie}
       CzIlosc={karta.CzIlosc}
       CzAsygnata={karta.CzAsygnata}
       CzUwagi={karta.CzUwagi}
     />
   ))} */}



{console.log()}
{
 this.props.zawartosCzynnosci.map(karta => {
  console.log(karta.CzOperacjaId)
     return (
     
    <RowCzynnosci key={karta.CzOperacjaId}
    CzOperacja={karta.CzOperacja}
    CzRbh={karta.CzRbh}
    CzDataWyk={karta.CzDataWyk}
    CzWykonawca={karta.CzWykonawca}
      CzWyszczegolnienie={karta.CzWyszczegolnienie}
      CzOznaczenie={karta.CzOznaczenie}
      CzIlosc={karta.CzIlosc}
      CzAsygnata={karta.CzAsygnata}
      CzUwagi={karta.CzUwagi}
      CzOperacjaId={karta.CzOperacjaId}
    />)
   })

    // this.props.zawartosCzynnosci.map(karta =>{
    //     Object.keys(karta).map(function(keyName, keyIndex){
    //         console.log(keyName)
    //     console.log(keyIndex)})})





    // Object.keys(this.props.zawartosCzynnosci).map(function(keyName, keyIndex){
    //     console.log(keyName, keyIndex)
    //         //  <RowCzynnosci key={karta.CzDataWyk}
    //         //  CzOperacja={karta.CzOperacja}
    //         //  CzRbh={karta.CzRbh}
    //         //  CzDataWyk={karta.CzDataWyk}
    //         //  CzWykonawca={karta.CzWykonawca}
    //         //    CzWyszczegolnienie={karta.CzWyszczegolnienie}
    //         //    CzOznaczenie={karta.CzOznaczenie}
    //         //    CzIlosc={karta.CzIlosc}
    //         //    CzAsygnata={karta.CzAsygnata}
    //         //    CzUwagi={karta.CzUwagi}
    //         //  />
    //     })
           
}

 </div>

  )}



};
export default TabelaCzynnosci
