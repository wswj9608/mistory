import React from 'react'
import styled from 'styled-components'
import { Text } from '../../elements'

const DiaryCard = ({ diary }: DiaryCardProps) => {
  const { createdAt, contents } = diary

  const dateToStringArray = new Date(createdAt).toString().split(' ')
  const week = dateToStringArray[0]
  const day = dateToStringArray[2]

  console.log()

  return (
    <CradWrapper>
      <div>
        <Text size="22px">{day}</Text>
        <Text size="18px">{week}</Text>
      </div>
      <div>
        <Text>{contents}</Text>
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

export default DiaryCard
