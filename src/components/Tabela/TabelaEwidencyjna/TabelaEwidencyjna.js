import React, { Component } from "react";
import { connect } from "react-redux";

import compose from "recompose/compose";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import "./style.css";

import styled from "styled-components";
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
  }
});

class TabelaEwidencyjna extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Wrapper>
      <SVG  onClick={() => window.scrollTo(0, 1000000000)}  width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></SVG>
          

        <Typography
          variant="headline"
          gutterBottom
          style={{ marginTop: "40px" }}
        >
          Lista Ewidencyjna Kart Usług Technicznych
        </Typography>
        <Paper className={classes.root}>
          <Table className={classes.table} id="tabela">
            <TableHead>
              <TableRow>
                <TableCell style={{textAlign: 'center',     padding: '4px 10px 4px 24px'}}>Lp.</TableCell>
                <TableCell style={{textAlign: 'center',     padding: '4px 10px 4px 24px'}}>Numer karty usługi</TableCell>
                <TableCell style={{textAlign: 'center',     padding: '4px 10px 4px 24px'}}>Pododdział</TableCell>

                <TableCell
                  style={{ textAlign: "center", padding: "4px 10px 4px 24px" }}
                >
                  Data wystawienia karty
                </TableCell>
                <TableCell
                  style={{ textAlign: "center", padding: "4px 10px 4px 24px" }}
                >
                  Typ UiSW
                </TableCell>
                <TableCell
                  style={{ textAlign: "center", padding: "4px 10px 4px 24px" }}
                >
                  Numer Rejestracyjny
                </TableCell>
                <TableCell
                  style={{ textAlign: "center", padding: "4px 10px 4px 24px" }}
                >
                  Zadanie do wykonania
                </TableCell>
                <TableCell
                  style={{ textAlign: "center", padding: "4px 10px 4px 24px" }}
                >
                  Podstawa wydania
                </TableCell>
                <TableCell
                  style={{ textAlign: "center", padding: "4px 10px 4px 24px" }}
                >
                  Kartę pobrał - Nazwisko
                </TableCell>
                <TableCell
                  style={{ textAlign: "center", padding: "4px 10px 4px 24px" }}
                >
                  Data ważności karty
                </TableCell>
                <TableCell
                  style={{ textAlign: "center", padding: "4px 10px 4px 24px" }}
                >
                  Karta została zdana
                </TableCell>
                <TableCell
                  style={{ textAlign: "center", padding: "4px 10px 4px 24px" }}
                >
                  Data zwrotu karty
                </TableCell>
                <TableCell
                  style={{ textAlign: "center", display:"none"}}
                >
                  Opis defaktacji
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.karty.map((karta, i) => (
                <TableRow key={i+1} className={classes.row}>
                  <TableCell
                    style={{
                      textAlign: "center",
                      padding: "4px 10px 4px 24px"
                    }}
                  >
                    {i+1}
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
                    {karta.wlasciciel}
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "center",
                      padding: "4px 10px 4px 24px"
                    }}
                  >
                    {karta.waznoscKarty}
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "center",
                      padding: "4px 10px 4px 24px"
                    }}
                  >
                    {karta.typ}
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
                    {karta.zadanie}
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "center",
                      padding: "4px 10px 4px 24px"
                    }}
                  >
                    {karta.podstawa}
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
                    {karta.terminWykonania}
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "center",
                      padding: "4px 10px 4px 24px"
                    }}
                  >
                    {karta.kartaZdana ? "TAK" : " NIE"}
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "center",
                      padding: "4px 10px 4px 24px"
                    }}
                  >
                    {karta.dataZdania}
                  </TableCell>
                  <TableCell
                    style={{
                      display: "none"
                    }}
                  >
                    {karta.opis}
                  </TableCell>
                 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        <ReactHTMLTableToExcel
          id="test-table"
          className="buttonTable"
          table="tabela"
          filename="Ewidencja kart usług technicznych"
          sheet="Ewidencja kart usług technicznych"
          buttonText="Eksportuj Liste do XLS"
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  width: calc(100% - 250px);
  background: white;
  margin-left: 240px;
  text-aling: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SVG = styled.svg`

  position: fixed;
  top: 20px;
  right: 20px;
  cursor: pointer;

`;

const mapStateToProps = state => {
  return {
    karty: state.karty
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(TabelaEwidencyjna);
