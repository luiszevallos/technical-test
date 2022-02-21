import axios from 'axios'
import { URL_HTTP } from '../constants/URL_HTTP'

export const getRequest = async (route, token) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `${URL_HTTP}${route}`,
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
    return response.data.data
  } catch (err) {
    throw err
  }
}

export const postRequest = async (route, data, token) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `${URL_HTTP}${route}`,
      headers: {
        Authorization: `Bearer ${token || ''}`
      },
      data,
    })
    return response.data
  } catch (err) {
    throw err
  }
}