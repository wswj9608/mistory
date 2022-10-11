import React from 'react'
import styled from 'styled-components'

const Input = ({ sx, type = 'text', ...rest }: InputProps) => {
  return <BasicInput style={{ ...sx }} type={type} {...rest} />
}

const BasicInput = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #bebebe;
  border-radius: 10px;
`

export default Input
