
import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from '../../../store/actions'
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import compose from "recompose/compose";


import { withStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";



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
  }
});
class EwidencjaPracy extends Component {


  render() {

    return (
      <div>
  Ewidencja Pracy Warsztatu
      </div>
    );
  }
}

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
  connect(mapStateToProps, mapDispatchToProps)
)(EwidencjaPracy);

