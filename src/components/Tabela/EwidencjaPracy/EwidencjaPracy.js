
import React, { Component } from "react";

import { connect } from "react-redux";
import styled from "styled-components";

import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import compose from "recompose/compose";


import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";




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
  
class EwidencjaPracy extends Component {


  render() {
    const { classes } =this.props;
    return (
      <Wrapper>
        <SVG  onClick={() => window.scrollTo(0, 1000000000)}  width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></SVG>
          

             <Typography
          variant="headline"
          gutterBottom
          style={{ marginTop: "40px" }}
        >
          Lista Ewidencyjna Godzin Pracy Warsztatu
        </Typography>
             <Paper className={classes.root} style={{width: '95%', textAlign: 'center'}}>
 <Table className={classes.table} id='ewidencja-roboczogodzin' >
        <TableHead>
          <TableRow >
            <TableCell style={{
                      textAlign: "center",
                      padding: "4px 10px 4px 24px"
                    }}>LP.</TableCell>
            <TableCell style={{
                      textAlign: "center",
                      padding: "4px 10px 4px 24px"
                    }} >Numer Karty</TableCell>
                      <TableCell style={{
                      textAlign: "center",
                      padding: "4px 10px 4px 24px"
                    }} >Nazwa sprzętu, typ sprzętu, numer fabryczny</TableCell>
                    <TableCell style={{
                      textAlign: "center",
                      padding: "4px 10px 4px 24px"
                    }} >Rodzaj naprawy</TableCell>
            <TableCell style={{
                      textAlign: "center",
                      padding: "4px 10px 4px 24px"
                    }} >Data Wystawienia Karty</TableCell>
            <TableCell style={{
                      textAlign: "center",
                      padding: "4px 10px 4px 24px"
                    }} >Rodzaj / Typ / Kategoria</TableCell>
            <TableCell style={{
                      textAlign: "center",
                      padding: "4px 10px 4px 24px"
                    }} >Ilość RBH</TableCell>
            <TableCell style={{
                      textAlign: "center",
                      padding: "4px 10px 4px 24px"
                    }} >Jednostek Sprzętu</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.karty.map((row, i) => {
            console.log(row)
            return (
              <TableRow key={i} className={classes.row}>
   
                <TableCell style={{
                      textAlign: "center",
                      padding: "4px 10px 4px 24px"
                    }} >{i + 1}</TableCell>
                <TableCell style={{
                      textAlign: "center",
                      padding: "4px 10px 4px 24px"
                    }} >{row.numerKuta}</TableCell>
                     <TableCell style={{
                      textAlign: "center",
                      padding: "4px 10px 4px 24px"
                    }} >{row.marka}</TableCell>
                     <TableCell style={{
                      textAlign: "center",
                      padding: "4px 10px 4px 24px"
                    }} >{row.zadanie }</TableCell>
                <TableCell style={{
                      textAlign: "center",
                      padding: "4px 10px 4px 24px"
                    }} >{row.terminWykonania}</TableCell>
                <TableCell style={{
                      textAlign: "center",
                      padding: "4px 10px 4px 24px"
                    }} >{row.rodzajRBH}</TableCell>
                <TableCell style={{
                      textAlign: "center",
                      padding: "4px 10px 4px 24px"
                    }} >{row.iloscRBH}</TableCell>
                <TableCell style={{
                      textAlign: "center",
                      padding: "4px 10px 4px 24px"
                    }} >{row.iloscSprzetuRBH}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      </Paper>
      <ReactHTMLTableToExcel
          id="ewidencja-roboczogodzin"
          className="buttonTable"
          table="ewidencja-roboczogodzin"
          filename="Ewidencja RBH pracy warsztatu"
          sheet="Ewidencja RBH pracy warsztatu"
          buttonText="Eksportuj Liste do XLS"
        />
      </Wrapper>
    );
  }
}


const Wrapper = styled.div`
margin-left: 240px;
width: calc(100% - 240px);
min-height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
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
)(EwidencjaPracy);

