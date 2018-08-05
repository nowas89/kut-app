import React from "react";
import styled from "styled-components";



const Button = props => {
  return (
    <div>
      <ButtonUi onClick={props.clicked}>{props.val} </ButtonUi>
    </div>
  );
};


const ButtonUi = styled.button`
background-color: #4CAF50; /* Green */
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
`

export default Button;
