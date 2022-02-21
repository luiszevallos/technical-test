import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

import * as yup from 'yup'

import { postRequest } from '../services/http-client'
import { StateContext } from '../contexts/useStateContext'
import ContainerInput from '../components/common/ContainerInput'
import TextInput from '../components/common/TextInput'
import ButtonPrimary from '../components/common/ButtonPrimary'
import Loading from '../components/common/Loading';

export default function LoginScreen() {
  const [loading, setLoading] = useState(false)
  const { dispatch } = useContext(StateContext)

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '', password: '',
    },
    validationSchema: yup.object({
      email: yup.string().required(),
      password: yup.string().min(5).required(),
    }),
    validateOnChange: false,
    onSubmit: formValue => signIn(formValue),
  })

  const signIn = async formData => {
    try {
      setLoading(true)
      const response = await postRequest('/login', formData)
      const { data, code, status } = response
      if (code === 200 && status) {
        setLoading(false)
        dispatch({ type: 'SET_USER', payload: data.user })
        dispatch({ type: 'SET_TOKEN', payload: data.token })
        navigate('/addMember')
      }
    } catch (error) {
      console.log(error.message)
      setLoading(false)
    }
  }

  return (
    <Main>
      {loading && <Loading />}
      <DivContain>
        <Form>
          <ContainerInput label="Email">
            <TextInput formik={formik} name="email" />
          </ContainerInput>
          <ContainerInput label="Password">
            <TextInput formik={formik} name="password" />
          </ContainerInput>
          <ButtonPrimary onClick={formik.handleSubmit} label="Sign in" />
        </Form>
      </DivContain>
    </Main>
  )
}

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #eeeeee;
`;

const DivContain = styled.div`
  width: 100%;
  margin: 0 auto;
  border-radius: 5px;
  max-width: 320px;
  padding: 30px 20px;
  background-color: #ffffff;
  @media (max-width: 950px) {
    width: calc(90% - 40px);
  }
`

const Form = styled.form`
  display: grid;
  grid-gap: 20px;
  border-radius: 5px;
`
