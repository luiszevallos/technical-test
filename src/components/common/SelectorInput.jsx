import React from 'react'
import styled from 'styled-components'

export default function SelectorInput(props) {
  const { name, formik, data, selectName, itemName } = props

  const { values, setFieldValue } = formik

  return (
    <Select
        name={name}
        onChange={({ target }) => setFieldValue(name, target.value)}
        value={values[name]}
      >
        <option value="">
          {selectName}
        </option>
        {data?.length > 0 &&
          data?.map((item, key) => (
            <option
              key={key}
              value={item.id}
            >
              {item[itemName]}
            </option>
          ))}
      </Select>
  )
}

const Select = styled.select`
  border: 0;
  outline: 0;
  padding: 10px 0;
  border-radius: 4px;
  background-color: #eeeeee;
`
