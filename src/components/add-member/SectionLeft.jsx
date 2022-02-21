import React from 'react'
import styled from 'styled-components'

import ContainerInput from '../common/ContainerInput'
import SelectorInput from '../common/SelectorInput'
import TextInput from '../common/TextInput'
import TitlePrimary from '../common/TitlePrimary'

export default function SectionLeft(props) {
  const { formik, data } = props

  return (
    <Section>
      <TitlePrimary title='Personal Info' />
      <GroupInput>
        <ContainerInput label="title">
          <SelectorInput
            name='title'
            formik={formik}
            data={data.titles}
            selectName="Select a title"
            itemName="name"
          />
        </ContainerInput>
        <ContainerInput label="last name">
          <TextInput name='last_name' formik={formik} />
        </ContainerInput>
        <ContainerInput label="first name">
          <TextInput name='first_name' formik={formik} />
        </ContainerInput>
        <ContainerInput label="middle name">
          <TextInput name='middle_name' formik={formik} />
        </ContainerInput>
      </GroupInput>
      <ContainerInput label="Suffix (Type in custom m Suffix)">
        <TextInput name='suffix' formik={formik} />
      </ContainerInput>
      <ContainerInput label="addres (1)">
        <TextInput name='address_line_1' formik={formik} />
      </ContainerInput>
      <ContainerInput label="addres (2)">
        <TextInput name='address_line_2' formik={formik} />
      </ContainerInput>
      <GroupInput>
        <ContainerInput label="Zip code">
          <TextInput name='zip_code' formik={formik} />
        </ContainerInput>
        <ContainerInput label="state">
          <TextInput name='state' formik={formik} />
        </ContainerInput>
        <ContainerInput label="City">
          <TextInput name='city' formik={formik} />
        </ContainerInput>
        <ContainerInput label="Social Security #">
          <TextInput name='social_security_number' formik={formik} />
        </ContainerInput>
        <ContainerInput label="Employee Number">
          <TextInput name='employee_number' formik={formik} />
        </ContainerInput>
        <ContainerInput label="IAFF#">
          <TextInput name='iaff_member_number' formik={formik} />
        </ContainerInput>
      </GroupInput>
    </Section>
  )
}

const Section = styled.section`
  margin: 10px 15px;
`

const GroupInput = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
