import React from 'react'
import styled from 'styled-components'
import { Text } from '../../elements'

const StoryCard = () => {
  return (
    <CradWrapper>
      <div>
        <Text size="22px">12</Text>
        <Text size="18px">Wed</Text>
      </div>
      <div>
        <Text>오늘은 날씨가 좋아서 그런지 하루종일 기분이 좋았다.</Text>
      </div>
    </CradWrapper>
  )
}

const CradWrapper = styled.div`
  width: 447px;
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;
  height: 107px;
  background-color: #eeeeee;
  display: flex;
`

export default StoryCard
