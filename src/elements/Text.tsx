import React from 'react'
import styled from 'styled-components'

const Text = ({
  size = '14px',
  weight = 'regular',
  color = '#000',
  children,
  ...rest
}: TextProps): JSX.Element | null => {
  return (
    <BasicText color={color} size={size} weight={weight} height={size} {...rest}>
      {children}
    </BasicText>
  )
}

const BasicText = styled.p<{
  size: string
  weight: string
  height: string
  color: string
}>`
  font-family: 'Noto Sans KR';
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => (weight === 'bold' ? '700' : '400')};
  line-height: ${({ size }) => Number(size.replace('px', '')) + 4}px;
`

export default Text
