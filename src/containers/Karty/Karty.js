import React, { Component } from "react";
import styled from "styled-components";

import Button from "../../components/UI/Button/Button"
import DodajKuta from "../../components/DodajKuta/DodajKuta"

export default class Karty extends Component {

state = {
buttonIsClicked: false

}


onClickAction = () => {
  console.log('asd')
  !this.state.buttonIsClicked ?  this.setState({ buttonIsClicked: true }): this.setState({ buttonIsClicked: false })
}
  render() {
    return (
        <Wrapper>
            <Button val={'Dodaj Nową Kartę'} clicked={this.onClickAction}/>
           {
             this.state.buttonIsClicked ? <DodajKuta /> : null
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
