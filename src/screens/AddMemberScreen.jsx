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
      console.log(response)
    } catch (error) {
      console.error(error)
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
        <SectionLeft formik={formik} data={data} />
        <SectionRight formik={formik} data={data} />
      </DivContain>
    </LayoutArrow>
  )
}

const DivContain = styled.div`
  width: 100%;
  overflow: auto;
  padding: 10px 0px;
  display: grid;
  max-width: 1024px;
  margin: 10px auto;
  border-radius: 5px;
  background-color: #ffffff;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    max-width: 600px;
  }
`