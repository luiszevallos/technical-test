import React from 'react'
import styled from 'styled-components'

export default function ContainerInput(props) {
  const { children, label, id } = props

  return (
    <Contain id={id}>
      <Label>{label}</Label>
      {children}
    </Contain>
  )
}

const Contain = styled.div`
  display: grid;
`

const Label = styled.label`
  color: #0072E5;
  margin: 5px 0;
  font-size: .9em;
  text-transform: capitalize;
`
