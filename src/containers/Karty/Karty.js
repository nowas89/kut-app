import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import compose from "recompose/compose";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";



import DodajKuta from "../../components/DodajKuta/DodajKuta";

import TabelaGlowna from "../../components/Tabela/TabelaGlowna";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    fontFamily: "Arial"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    fontFamily: "Arial"
  },
  button: {
    margin: theme.spacing.unit,
    fontFamily: "Arial"
    
  }
})

class Karty extends Component {
  state = {
    buttonIsClicked: false,
    buttonDisable: false
    
  };

  // onClickAction = () => {

  //   !this.props.buttonIsClicked  ?  this.setState({ buttonIsClicked: true, buttonDisable: true }) : this.setState({  buttonIsClicked: false, buttonDisable: false})

  // }




    
  render() {
    const { classes } = this.props;
    
    

  
  
    return (
      <Wrapper>
        {!this.props.buttonDisable ? (
         <Button
         variant="outlined"
         className={classes.button}
         style={{marginTop: "70px"}}
            onClick={(a, b) =>
              this.props.onAddingKut(
                this.props.buttonDisable,
                this.props.buttonIsClicked
              )
            }
          > <AddIcon/>
         Dodaj Nową Kartę
          </Button>
        ) : (
          <Typography variant="display1" gutterBottom style={{marginTop: "40px"}}>
          Dodajesz nową kartę . . .
          </ Typography>
        )}
        {this.props.buttonIsClicked ? <DodajKuta /> : null}

       {!this.props.buttonIsClicked && !this.props.kartaJestOtwarta && this.props.karty.length > 0 ? (
 <TabelaGlowna />
        ) : null}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin-left: 250px;
  min-height: calc(100vh + 90px);
position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 250px);

  button {
    margin-top: 30px;
  }
`;

const mapStateToProps = state => {
  return {
    karty: state.karty,
    buttonIsClicked: state.buttonIsClicked,
    buttonDisable: state.buttonDisable,
    kartaJestOtwarta: state.kartaJestOtwarta
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddNewKut: () => dispatch(actions.addNewKut()),
    onAddingKut: (a, b) => dispatch(actions.buttonKlicked(a, b))
  };
};
export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Karty);
