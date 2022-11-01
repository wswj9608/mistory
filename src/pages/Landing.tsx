import { useEffect } from 'react'
import { getStoryListToAxios } from '../lib/api/storyCard'
import StoryCard from '../components/StoryCard'

const Landing = () => {
  useEffect(() => {
    const getDiaries = async () => {
      const res = await getStoryListToAxios()
      return res
    }

    getDiaries()
  }, [])
  return (
    <div>
      <StoryCard />
    </div>
  )
}

export default Landing
