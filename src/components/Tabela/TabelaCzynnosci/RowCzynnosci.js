import React from 'react';
import "../table.css"


const RowCzynnosci = (props) => {
   return (
        <div className="table_row">
        <div className="table_small">
          <div className="table_cell">Operacja, Czynność</div>
          <div className="table_cell">{props.CzOperacja}</div>
        </div>
        <div className="table_small">
          <div className="table_cell">Zużyto RBH</div>
          <div className="table_cell">{props.CzRbh}</div>
        </div>
        <div className="table_small">
          <div className="table_cell">Data Wykonania</div>
          <div className="table_cell">{props.CzDataWyk}</div>
        </div>
        <div className="table_small">
          <div className="table_cell">Wykonawca - Nazwisko</div>
          <div className="table_cell">{props.CzWykonawca}</div>
        </div>
        <div className="table_small">
          <div className="table_cell">Wyszczególnienie</div>
          <div className="table_cell">{props.CzWyszczegolnienie}</div>
        </div>
        <div className="table_small">
          <div className="table_cell">Oznaczenie katalogowe</div>
          <div className="table_cell">{props.CzOznaczenie}</div>
        </div>
        <div className="table_small">
          <div className="table_cell">Ilość</div>
          <div className="table_cell">{props.CzIlosc}</div>
        </div>
        <div className="table_small">
          <div className="table_cell">Asygnata</div>
          <div className="table_cell">{props.CzAsygnata}</div>
        </div>
        <div className="table_small">
          <div className="table_cell">Uwagi</div>
          <div className="table_cell">{props.CzUwagi}</div>
        </div>
      </div>
     
    )
}
export default RowCzynnosci; 