import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions"
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";



const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    fontFamily: "Arial"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 180,
    fontFamily: "Arial",
    [theme.breakpoints.down("md")]: {
      width: 120,
      fontSize: 7
    }
  },
  textFieldAr: {
    width: 750,
    [theme.breakpoints.down("md")]: {
      width: 420,
      fontSize: 3
    }
  },
  button: {
    margin: theme.spacing.unit,
    fontFamily: "Arial"
  },
  input: {
    display: "none",
    fontFamily: "Arial"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});
import "../table.css";

import RowCzynnosci from "./RowCzynnosci";

class TabelaCzynnosci extends Component {
  render() {
    return (
      <div className="table">
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

        {this.props.zawartosCzynnosci.map(karta => {

          return (
            <RowCzynnosci clicked={() => this.props.onEditCzynnosc(karta)}
              key={karta.CzOperacjaId}
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
            />
          );
        })}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    onEditCzynnosc: cz => dispatch(actions.editCzynnosc(cz)),
  };
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(TabelaCzynnosci);
