import client, { privateClient } from './common'

export const getStoryListToAxios = async () => {
  const res = await privateClient.get<DiaryType[]>('/diaries')
  return res.data
}
