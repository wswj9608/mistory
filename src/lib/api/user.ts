import client from './common'

export const joinUser = async (userData: JoinUserDataType) => {
  const res = await client.post('/user/join', userData)
  return res.data
}

export const loginToAxios = async (loginData: LoginInputType) => {
  const res = await client.post<LoginResponse>('/user/login', loginData)
  return res.data
}
