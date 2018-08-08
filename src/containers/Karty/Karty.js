import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../../store/actions"

import Button from "../../components/UI/Button/Button"
import DodajKuta from "../../components/DodajKuta/DodajKuta"
import Tabela from '../../components/Tabela/Tabela'

 class Karty extends Component {

state = {
buttonIsClicked: false,
buttonDisable: false
}


// onClickAction = () => {

//   !this.props.buttonIsClicked  ?  this.setState({ buttonIsClicked: true, buttonDisable: true }) : this.setState({  buttonIsClicked: false, buttonDisable: false})


// }
  render() {
    return (
        <Wrapper>
          {!this.props.buttonDisable 
          ? <Button val={'Dodaj Nową Kartę'} clicked={(a, b) => this.props.onAddingKut(this.props.buttonDisable, this.props.buttonIsClicked )} ></Button>
          : <h2>Dodajesz Nowa Kartę . . .</h2>
          }
           {
             this.props.buttonIsClicked 
             ? <DodajKuta  /> 

             : null
           }
        
           { !this.props.buttonIsClicked  && this.props.karty.length > 0 ?
             
             <Tabela /> : null
           }
      
        </Wrapper>
    );
  }
}

const Wrapper = styled.div`
margin-left: 250px;
min-height: 100vh;

display:flex;
flex-direction: column;
align-items:center;


Button{
  margin-top: 30px;
}

`


const mapStateToProps = state => {
  return {
karty: state.karty,
 buttonIsClicked: state.buttonIsClicked,
buttonDisable: state.buttonDisable
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddNewKut: () => dispatch(actions.addNewKut()),
    onAddingKut: (a, b) => dispatch(actions.buttonKlicked(a, b))

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Karty);