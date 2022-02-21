import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as yup from 'yup'

import SectionLeft from '../components/add-member/SectionLeft'
import SectionRight from '../components/add-member/SectionRight'
import LayoutArrow from '../components/layout/LayoutArrow'
import { StateContext } from '../contexts/useStateContext'
import { stateMember } from '../constants/STATE_GLOBAL'
import { getRequest, postRequest } from '../services/http-client'
import Loading from '../components/common/Loading'

export default function AddMemberScreen() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(undefined)
  const [data, setData] = useState({
    titles: [],
    gender: [],
    ethnicity: [],
    position: [],
    sickplan: []
  })

  const { state, dispatch } = useContext(StateContext)
  const navigate = useNavigate()

  const { token } = state

  useEffect(() => {
    if (!token) {
      goSignIn()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  const getApis = async () => {
    try {
      setLoading(true)
      const titles = await getRequest('/title/get/all', token)
      const gender = await getRequest('/gender/get/all', token)
      const ethnicity = await getRequest('/ethnicity/get/all', token)
      const position = await getRequest('/position/get/all', token)
      const sickplan = await getRequest('/sickplan/get/all', token)
      setData({ ...data, titles, gender, ethnicity, position, sickplan })
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getApis()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const formik = useFormik({
    initialValues: stateMember,
    validationSchema: yup.object({}),
    validateOnChange: false,
    onSubmit: formValue => addMember(formValue),
  })

  const addMember = async formData => {
    try {
      setLoading(true)
      const response = await postRequest('/member', formData, token)
      setMessage(response.message)
      formik.resetForm()
    } catch (error) {
      setMessage(error.message)
    } finally {
      setLoading(false)
    }
  }

  const goSignIn = () => {
    setLoading(true)
    navigate(-1)
    dispatch({ type: 'SET_USER', payload: undefined })
    dispatch({ type: 'SET_TOKEN', payload: undefined })
  }

  return (
    <LayoutArrow title='Add Member' onClick={goSignIn} >
      {loading && <Loading />}
      <DivContain>
        {message && <Span>{message}</Span>}
        <Div>
          <SectionLeft formik={formik} data={data} />
          <SectionRight formik={formik} data={data} />
        </Div>
      </DivContain>
    </LayoutArrow>
  )
}

const DivContain = styled.div`
  max-width: 1024px;
  margin: 10px auto;
  border-radius: 5px;
  padding: 10px 0px;
  background-color: #ffffff;
  width: 100%;
  display: grid;
  @media (max-width: 950px) {
    max-width: 600px;
  }
`
const Span = styled.span`
  text-align: center;
  color: #86EA2C;
  font-size: .9em;
`
const Div = styled.div`
  display: grid;
  overflow: auto;
  height: 90vh;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 950px) {
    width: 100%;
    margin: 0 auto;
    grid-template-columns: 1fr;
  }
`