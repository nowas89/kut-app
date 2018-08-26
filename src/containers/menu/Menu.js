import React, { Component } from "react";
import styled from "styled-components";
import { Switch, Route, NavLink } from "react-router-dom";
import Karty from "../Karty/Karty";
import Image from './niepodlegla.jpg'
// import TabelaEwidencyjna from '../../components/Tabela/TabelaEwidencyjna/TabelaEwidencyjna';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Settings from '../Settings/Settings'



import TabelaEwidencyjna from "../../components/Tabela/TabelaEwidencyjna/TabelaEwidencyjna";
import EwidencjaPracy from "../../components/Tabela/EwidencjaPracy/EwidencjaPracy";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
    fontFamily: "Arial"
  },
});
class Menu extends Component {
  render() {



    return (
      <div>
        <MenuWrap>
          <div>
            <Nav>
              <ul>
                <li >
                  <NavLink  to="/karty"    style={{fontFamily: 'Arial'}} >Karty Usług Technicznych</NavLink>
                </li>
                <li>
                  <NavLink to="/ewidencja"    style={{fontFamily: 'Arial'}}>Ewidencja Kart</NavLink>
                </li>
                <li>
                  <NavLink to="/ewidencjaPracy"    style={{fontFamily: 'Arial'}}>Ewidencja Pracy Warsztatu</NavLink>
                </li>
              </ul>
            </Nav>    
          </div>         
          <DOlnyDiv> 
            <Img src={Image} role='presentation'/>
            <NavLink to="/ustawienia" activeClassName='none'>    <Button>  <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <path fill="none" d="M0 0h20v20H0V0z"/>
    <path d="M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/>
</svg>
</Button></NavLink></DOlnyDiv>
        </MenuWrap>
        <Switch>
        <Route   exact path="/karty"  component={Karty} />
          <Route  exact  path="/ewidencja" component={TabelaEwidencyjna} />
          <Route  exact  path="/ewidencjaPracy" component={EwidencjaPracy} />
          <Route  exact  path="/ustawienia" component={Settings} />
 
        </Switch>
      </div>
    );
  }
}
const Img = styled.img`
width: 230px;
left: -84px;
position: relative;`

const DOlnyDiv = styled.div`
position: absolute;
bottom: 20px;
left 80px;
svg{
  fill: #743ee8;
}
`

const MenuWrap = styled.section`
overflow:hidden;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  background: white;
  box-shadow: 17px 0px 28px -11px rgba(0, 0, 0, 0.16);
  height: 100vh;
  width: 220px;

#karty{

}
.active{
border-left: 6px solid #743ee8;
font-weight: 500;
box-shadow:         inset 0 0 10px rgba(0, 0 ,0 , 0.1);
overflow: hidden;
}
  ul {
    padding: 0;
    
    li {
      width: 100%;
      height: 50px;

      margin-top: 30px;
      font-family: 'Roboto', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      background: white;
      list-style: none;

     &:active{
      border-left: 6px solid #743ee8;
      font-weight: 500;
      font-size: 17px;     
     }
      a {
        text-decoration: none;
        color: #1b4962;
      font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items:center;
font-size: 15px;        
height: 100%;
width: 100%;

      }
   
    }
  }
`;
const Nav = styled.nav`
margin-top: 100px;
`


export default withStyles(styles)(Menu);
