import React from 'react'
import styled from 'styled-components'
import ButtonClose from '../common/ButtonClose'
import ButtonPrimary from '../common/ButtonPrimary'
import ContainerInput from '../common/ContainerInput'
import RadioInput from '../common/RadioInput'
import SelectorInput from '../common/SelectorInput'
import TextInput from '../common/TextInput'
import TitlePrimary from '../common/TitlePrimary'

export default function SectionRight(props) {
  const { formik, data } = props

  return (
    <Section>
      <TitlePrimary title='Member status' />
      <GroupInput>
        <RadioInput
          name='union_membership_status_id'
          formik={formik}
          id={1}
          label="initiated"
        />
        <RadioInput
          id={2}
          name='union_membership_status_id'
          formik={formik}
          label="Transferred In"
        />
      </GroupInput>
      <TitlePrimary title='demographics' />
      <GroupInput>
        <ContainerInput label="date of birth">
          <TextInput name='birth_date' formik={formik} type="date" />
        </ContainerInput>
        <ContainerInput label="join date">
          <TextInput name='join_date' formik={formik} type="date" />
        </ContainerInput>
        <ContainerInput label="gender">
          <SelectorInput
            name='gender_id'
            formik={formik}
            data={data.gender}
            selectName="Select Gender"
            itemName="name"
          />
        </ContainerInput>
        <ContainerInput label="race">
          <SelectorInput
            name='ethnicity_id'
            formik={formik}
            data={data.ethnicity}
            selectName="Select a Race"
            itemName="name"
          />
        </ContainerInput>
      </GroupInput>
      <TitlePrimary title='job info' />
      <GroupInput>
        <ContainerInput label="Original Hire *">
          <TextInput name='firstName' formik={formik} />
        </ContainerInput>
        <ContainerInput label="Badge #">
          <TextInput name='badge_number' formik={formik} />
        </ContainerInput>
      </GroupInput>
      <ContainerInput label="Position">
        <SelectorInput
          name='position_id'
          formik={formik}
          data={data.position}
          selectName="Select a position"
          itemName="name"
        />
      </ContainerInput>
      <ContainerInput label="Sick Plan">
        <SelectorInput
          name='sick_plan_id'
          formik={formik}
          data={data.sickplan}
          selectName="Select Sick Plan"
          itemName="name"
        />
      </ContainerInput>
      <TitlePrimary title='contact details' />
      <GroupInput>
        <ContainerInput label="Home Phone">
          <TextInput name='home_phone' formik={formik} />
        </ContainerInput>
        <ContainerInput label="Cell Phone">
          <TextInput name='cell_phone' formik={formik} />
        </ContainerInput>
      </GroupInput>
      <ContainerInput label="Email Address">
        <TextInput name='email' formik={formik} />
      </ContainerInput>
      <GroupInput>
        <ButtonPrimary onClick={formik.handleSubmit} label="Create" />
        <ButtonClose onClick={formik.resetForm} label="Close" />
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
