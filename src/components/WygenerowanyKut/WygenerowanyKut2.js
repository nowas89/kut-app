import React, { Component } from "react";
import style from "styled-components";

import KutToPrint2 from "./KutToPrint2";

import ReactToPrint from "react-to-print";

class WygenerowanyKut2 extends Component {
  render() {
    return (
      <Wrap> 
        <div >
          <ReactToPrint
            trigger={() => <ASD href="#">Wydrukuj</ASD>}
            content={() => this.componentRef}
          />
        </div>
        <KutToPrint2 kartaDoDruku={this.props.kartaDoDruku} ref={el => (this.componentRef = el)} />
      </Wrap>
    );
  }
}

const Wrap = style.div`

width: 1000px;
margin-top: 100px;

box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;

`;
const ASD = style.a`
position: relative;
text-align: center;

height: 20px;
width: 300px;
top: -310px;
right: -500px;

`;

export default WygenerowanyKut2;
