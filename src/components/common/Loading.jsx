import React from 'react'
import styled from 'styled-components'
import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <DivLoading>
      <ReactLoading
        type="spin"
        width={40}
        height={40}
        color="#FF4D52"
      />
      <Span>Loading...</Span>
    </DivLoading>
  )
}

const Span = styled.span`
  color: #5b5b5b;
`

const DivLoading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.4);
`
