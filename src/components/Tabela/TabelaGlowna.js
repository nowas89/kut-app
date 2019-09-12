import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../store/actions";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import styled from "styled-components";
import compose from "recompose/compose";

import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./TabelaEwidencyjna/style.css";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

// import styled from "styled-components";
const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700,
    padding: 0
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit,
    fontFamily: "Arial"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 220
  }
});
class TabelaGlowna extends Component {
  state = {
    searchString: "",
    zdaneKarty: false
  };
  przeszukajKarty = e => {
    this.setState({ searchString: e.target.value.toLowerCase() });
  };

  resetState = e => {
    setTimeout(() => {
      this.setState({ searchString: "" });
    }, 50);
  };

  handleChange = event => {
    this.setState({ zdaneKarty: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    let newArray = this.props.karty;
 newArray.sort((a, b) => a.numerKuta > b.numerKuta)

   
    



    console.log('[sortowanie]',  newArray)
    let searchString = this.state.searchString.trim().toLowerCase();

    if (searchString.length > 0 && this.state.zdaneKarty) {
      newArray = newArray.filter(karta => {
        return (
         ( karta.numerKuta.toLowerCase().includes(this.state.searchString) &&  !karta.kartaZdana) ||
          (karta.pobierajacy.toLowerCase().includes(this.state.searchString)  &&  !karta.kartaZdana)||
     (     karta.marka.toLowerCase().includes(this.state.searchString)  &&  !karta.kartaZdana)||
          (karta.nrRej.toLowerCase().includes(this.state.searchString)  &&  !karta.kartaZdana)||
        (  karta.wlasciciel.toLowerCase().includes(this.state.searchString)  &&  !karta.kartaZdana)||
         ( karta.wystawiajacy.toLowerCase().includes(this.state.searchString)  &&  !karta.kartaZdana)
         
        );
      });
    } else if (searchString.length > 0 && !this.state.zdaneKarty) {
      newArray = newArray.filter(karta => {
        return (
          karta.numerKuta.toLowerCase().includes(this.state.searchString) ||
          karta.pobierajacy.toLowerCase().includes(this.state.searchString) ||
          karta.marka.toLowerCase().includes(this.state.searchString) ||
          karta.nrRej.toLowerCase().includes(this.state.searchString) ||
          karta.wlasciciel.toLowerCase().includes(this.state.searchString) ||
          karta.wystawiajacy.toLowerCase().includes(this.state.searchString)
        );
      });
    } else if (
      searchString.length === 0 && this.state.zdaneKarty
    ) {
      newArray = newArray.filter(karta => {
        return (
          ( karta.numerKuta.toLowerCase().includes(this.state.searchString) &&  !karta.kartaZdana) ||
          (karta.pobierajacy.toLowerCase().includes(this.state.searchString)  &&  !karta.kartaZdana)||
     (     karta.marka.toLowerCase().includes(this.state.searchString)  &&  !karta.kartaZdana)||
          (karta.nrRej.toLowerCase().includes(this.state.searchString)  &&  !karta.kartaZdana)||
        (  karta.wlasciciel.toLowerCase().includes(this.state.searchString)  &&  !karta.kartaZdana)||
         ( karta.wystawiajacy.toLowerCase().includes(this.state.searchString)  &&  !karta.kartaZdana)
        );
      });
    }





    return (
      <Wrapper>
          <Paper style={{ position: "relative", marginTop: '30px', padding: "10px", width: '310px' }}>
          <Typography variant="subheading" gutterBottom style={{}}>
            Przeszukaj Karty
          </Typography>
          <TextField
            label="Szukaj"
            className={classes.textField}
            margin="normal"
            type="text"
            defaultValue={this.state.searchString}
            autoComplete="on"
            onChange={e => this.przeszukajKarty(e)}
          />

          <FormControlLabel
            style={{ margin: "0", display: 'flex', justifyContent: 'center'}}
            control={
              <Checkbox
                checked={this.state.kartaZdana}
                onChange={e => this.handleChange(e)}
                value="kartaZdana"
                color="primary"
              />
            }
            label={
              this.state.zdaneKarty
                ? "Przeszukujesz Niezdane Karty"
                : "Przeszukaj Niezdane Karty"
            }
          />
        </Paper>
        <Paper className={classes.root}>
          <Table className={classes.table} id="tabelaKart">
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    textAlign: "center",
                    padding: "4px 10px 4px 24px"
                  }}
                >
                  Lp.
                </TableCell>
                <TableCell
                  style={{
                    textAlign: "center",
                    padding: "4px 10px 4px 24px"
                  }}
                >
                  Numer Karty
                </TableCell>
                <TableCell
                  style={{
                    textAlign: "center",
                    padding: "4px 10px 4px 24px"
                  }}
                >
                  Marka i Typ
                </TableCell>
                <TableCell
                  style={{
                    textAlign: "center",
                    padding: "4px 10px 4px 24px"
                  }}
                >
                  Nr Rejestracyjny
                </TableCell>
                <TableCell
                  style={{
                    textAlign: "center",
                    padding: "4px 10px 4px 24px"
                  }}
                >
                  Właściciel
                </TableCell>
                <TableCell
                  style={{
                    textAlign: "center",
                    padding: "4px 10px 4px 24px"
                  }}
                >
                  Termin Wykonania
                </TableCell>
                <TableCell
                  style={{
                    textAlign: "center",
                    padding: "4px 10px 4px 24px"
                  }}
                >
                  Zadanie
                </TableCell>
                <TableCell
                  style={{
                    textAlign: "center",
                    padding: "4px 10px 4px 24px"
                  }}
                >
                  Pobierający
                </TableCell>
                <TableCell
                  style={{
                    textAlign: "center",
                    padding: "4px 10px 4px 24px"
                  }}
                >
                  Karta Została Zdana
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.searchString !== "" || this.state.zdaneKarty
                ? newArray.map((karta, i) => (
                    <TableRow
                      key={i + 1}
                      className={classes.row}
                      onClick={() => this.props.onOpeningKut(karta)}
                    >
                      <TableCell
                        style={{
                          textAlign: "center",
                          padding: "4px 10px 4px 24px"
                        }}
                      >
                        {i + 1}
                      </TableCell>
                      <TableCell
                        style={{
                          textAlign: "center",
                          padding: "4px 10px 4px 24px"
                        }}
                      >
                        {karta.numerKuta}
                      </TableCell>
                      <TableCell
                        style={{
                          textAlign: "center",
                          padding: "4px 10px 4px 24px"
                        }}
                      >
                        {karta.marka}
                      </TableCell>
                      <TableCell
                        style={{
                          textAlign: "center",
                          padding: "4px 10px 4px 24px"
                        }}
                      >
                        {karta.nrRej}
                      </TableCell>
                      <TableCell
                        style={{
                          textAlign: "center",
                          padding: "4px 10px 4px 24px"
                        }}
                      >
                        {karta.wlasciciel}
                      </TableCell>
                      <TableCell
                        style={{
                          textAlign: "center",
                          padding: "4px 10px 4px 24px"
                        }}
                      >
                        {karta.terminWykonania}
                      </TableCell>
                      <TableCell
                        style={{
                          textAlign: "center",
                          padding: "4px 10px 4px 24px"
                        }}
                      >
                        {karta.zadanie}
                      </TableCell>
                      <TableCell
                        style={{
                          textAlign: "center",
                          padding: "4px 10px 4px 24px"
                        }}
                      >
                        {karta.pobierajacy}
                      </TableCell>
                      <TableCell
                        style={{
                          textAlign: "center",
                          padding: "4px 10px 4px 24px"
                        }}
                      >
                        {karta.kartaZdana ? "TAK": <h3 style={{color: 'red'}}>NIE</h3> }
                      </TableCell>
                    </TableRow>
                  ))
                : this.props.karty.map((karta, i) => (
                    <TableRow
                      key={i + 1}
                      className={classes.row}
                      onClick={() => this.props.onOpeningKut(karta)}
                    >
                      <TableCell
                        style={{
                          textAlign: "center",
                          padding: "4px 10px 4px 24px"
                        }}
                      >
                        {i + 1}
                      </TableCell>
                      <TableCell
                        style={{
                          textAlign: "center",
                          padding: "4px 10px 4px 24px"
                        }}
                      >
                        {karta.numerKuta}
                      </TableCell>
                      <TableCell
                        style={{
                          textAlign: "center",
                          padding: "4px 10px 4px 24px"
                        }}
                      >
                        {karta.marka}
                      </TableCell>
                      <TableCell
                        style={{
                          textAlign: "center",
                          padding: "4px 10px 4px 24px"
                        }}
                      >
                        {karta.nrRej}
                      </TableCell>
                      <TableCell
                        style={{
                          textAlign: "center",
                          padding: "4px 10px 4px 24px"
                        }}
                      >
                        {karta.wlasciciel}
                      </TableCell>
                      <TableCell
                        style={{
                          textAlign: "center",
                          padding: "4px 10px 4px 24px"
                        }}
                      >
                        {karta.terminWykonania}
                      </TableCell>
                      <TableCell
                        style={{
                          textAlign: "center",
                          padding: "4px 10px 4px 24px"
                        }}
                      >
                        {karta.zadanie}
                      </TableCell>
                      <TableCell
                        style={{
                          textAlign: "center",
                          padding: "4px 10px 4px 24px"
                        }}
                      >
                        {karta.pobierajacy}
                      </TableCell>
                      <TableCell
                        style={{
                          textAlign: "center",
                          padding: "4px 10px 4px 24px"
                        
                        }}
                      >
                        {karta.kartaZdana ? "TAK": <h3 style={{color: 'red'}}>NIE</h3> }
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </Paper>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="buttonTable"
          table="tabelaKart"
          filename="Tabela Kart Usług Technicznych"
          sheet="tablexls"
          buttonText="Eksportuj Listę do XML"
        />

      
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Arial";
  font-weight: 400;
  min-height: 740px;
  width: 95%;
`;

const mapStateToProps = state => {
  return {
    karty: state.karty
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOpeningKut: karta => dispatch(actions.openKut(karta))
  };
};
export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(TabelaGlowna);
