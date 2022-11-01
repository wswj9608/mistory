import client from './common'

export const getStoryListToAxios = async () => {
  const res = await client.get('/diaries')
  return res.data
}
