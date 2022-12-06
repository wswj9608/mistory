import axios from 'axios'
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export const API_BASE_URL = process.env.REACT_APP_BASE_URL
console.log(API_BASE_URL)

const client: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
})

export const privateClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
})

client.interceptors.request.use((req: any) => {
  const config = req

  if (!config?.headers) {
    return
  }

  return config
})

privateClient.interceptors.request.use((req: any) => {
  const config = req
  const loginToken = window.localStorage.getItem('loginToken')

  if (!config.headers) return

  if (loginToken) {
    config.headers.Authorization = `Bearer ${loginToken}`
  }

  return config
})

client.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    return new Promise(() => {
      throw error
    })
  }
)

export default client
