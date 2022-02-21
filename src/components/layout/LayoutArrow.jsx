import React from 'react'
import styled from 'styled-components'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function layoutArrow(props) {
  const { children, title, onClick } = props

  return (
    <Main>
      <Header>
        <DivButton onClick={onClick}>
          <ArrowBackIcon sx={{ color: "#d4d4d4", fontSize: 30 }} />
        </DivButton>
        <div>{title}</div>
      </Header>
      {children}
    </Main>
  )
}

const Main = styled.main`
  background-color: #eeeeee;
  height: 100vh;
  display: grid;
  grid-template-rows: 30px 1fr;
`

const Header = styled.header`
  display: flex;
  align-items: center;
`
const DivButton = styled.div`
  margin: 5px 10px;
  cursor: pointer;
`
