import { useEffect } from 'react'
import styled from 'styled-components'
import { getStoryListToAxios } from '../lib/api/storyCard'
import DiaryCard from '../components/DiaryCard'
import { useDiariesInRecoil } from '../atoms/diary'

const Landing = () => {
  const [diaries, setDiaries] = useDiariesInRecoil()

  useEffect(() => {
    const getDiaries = async () => {
      const res = await getStoryListToAxios()

      setDiaries(res)
    }

    getDiaries()
  }, [])
  return (
    <LandingWrapper>
      <div>
        {diaries.map(diary => (
          <DiaryCard diary={diary} key={diary._id} />
        ))}
      </div>
    </LandingWrapper>
  )
}

const LandingWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default Landing
