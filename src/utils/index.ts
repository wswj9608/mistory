import { AxiosError } from 'axios'

export const getErrorMessage = (error: unknown) => {
  const { response } = error as AxiosError<any>

  if (response?.data) {
    return response?.data.message
  }
}
