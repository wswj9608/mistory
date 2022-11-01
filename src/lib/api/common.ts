import axios from 'axios'
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export const API_BASE_URL = process.env.REACT_APP_BASE_URL
console.log(API_BASE_URL)

const client: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
})

export const admin: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
})

client.interceptors.request.use((req: any) => {
  const config = req

  if (!config?.headers) {
    return
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
