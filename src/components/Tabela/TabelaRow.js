import React from 'react';
import './table.css'



const TabelaRow = (props) => {

   return (
  
        <div className="table_row"  onClick={props.clicked}>

        <div className="table_small">
          <div className="table_cell">Numer Karty</div>
          <div className="table_cell">{props.numerKuta}</div>
        </div>
        <div className="table_small">
          <div className="table_cell">Marka i typ sprzętu</div>
          <div className="table_cell">{props.marka}</div>
        </div>
        <div className="table_small">
          <div className="table_cell">Nr. rejestracyjnt</div>
          <div className="table_cell">{props.nrRej}</div>
        </div>
        <div className="table_small">
          <div className="table_cell">Sprzet należy do:</div>
          <div className="table_cell">{props.wlasciciel}</div>
        </div>
        <div className="table_small">
          <div className="table_cell">Data wystawienia karty</div>
          <div className="table_cell">{props.terminWykonania}</div>
        </div>
        <div className="table_small">
          <div className="table_cell">Zadanie</div>
          <div className="table_cell">{props.zadanie}</div>
        </div>
        <div className="table_small">
          <div className="table_cell">Pobierający</div>
          <div className="table_cell">{props.pobierajacy}</div>
        </div>
        <div className="table_small">
          <div className="table_cell">Zdanie Karty</div>
          <div className="table_cell">{props.kartaZdana ? 'TAK' : 'NIE'}</div>
        </div>

      </div>
     
    )
}
export default  TabelaRow; 