import React, { Component } from "react";
import styled from "styled-components";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <MenuWrap>
          <div >
            <nav>
              <ul>
                <li>
                  <a href="#intro">Karty Usług Technicznych</a>
                </li>
                <li>
                  <a href="#one">Ewidencja Kart</a>
                </li>
                <li>
                  <a href="#two">Ewidencja Roboczo Godzin</a>
                </li>
             
              </ul>
            </nav>
          </div>
        </MenuWrap>
      </div>
    );
  }
}

const MenuWrap = styled.section`
margin: 0;
padding: 0;
position: fixed;
background: #F6F6F6;
    height: 100vh;
    width: 220px;
    outline: pink 1px solid;
    ul{
        padding: 0;
        li{
            height: 100px;
            width: 100%;
            margin-top: 30px;


            display:flex;
            justify-content: center;
            align-items: center;
            background: white;
            list-style: none;
            a{
                text-decoration: none;
                color: black;
            }
            &:hover{
                background:white;
            }
        }
    }


`
