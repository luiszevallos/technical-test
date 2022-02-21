import React from 'react'
import styled from 'styled-components'

export default function TitlePrimary(props) {
  const { title } = props

  return (
    <DivContain>
      <Span>{title}</Span>
    </DivContain>
  )
}

const DivContain = styled.div`
  padding: 2px;
`

const Span = styled.span`
  color: #FF4D52;
  font-size: 1.1em;
  font-weight: bold;
  text-transform: capitalize;
`