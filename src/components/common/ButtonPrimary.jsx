import React from "react";
import styled from "styled-components";

export default function ButtonPrimary(props) {
  const { label, onClick } = props

  return (
    <Div onClick={onClick}>
      <Span>
        {label}
      </Span>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  border-radius: 5px;
  margin-top: 10px;
  padding: 10px 25px;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  background-color: #FF4D52;
  `;

const Span = styled.span`
  color: #ffffff;
  font-weight: bold;
`;
