import React from 'react'
import styled from 'styled-components'

export default function TextInput(props) {
  const { name, formik, type } = props

  const { values, setFieldValue } = formik

  return (
    <Input
      type={name.toLowerCase().includes("password") ? "password" : type || "text"}
      name={name}
      value={values[name]}
      onChange={({target}) => setFieldValue(name, target.value)}
    />
  )
}

const Input = styled.input`
  border: 0;
  outline: 0;
  padding: 10px 15px;
  border-radius: 4px;
  background-color: #eeeeee;
`
