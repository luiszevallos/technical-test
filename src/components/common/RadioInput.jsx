import React from 'react'
import styled from 'styled-components'

export default function RadioInput(props) {
  const { name, formik, label, id } = props

  const { values, setFieldValue } = formik

  return (
    <div>
      <Input
        id={id}
        type="radio"
        name={name}
        value={values[name]}
        onChange={({target}) => setFieldValue(name, id)}
      />
      <label for={id}>{label}</label>
    </div>
  )
}

const Input = styled.input`
  border: 0;
  outline: 0;
  padding: 10px 15px;
  border-radius: 4px;
  background-color: #eeeeee;
`
