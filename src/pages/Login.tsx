import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Input, Text } from '../elements'

interface InputsStateType {
  userId: string
  password: string
  userName: string
  userEmail: string
  userPhone: string
}

const Login = () => {
  const [inputs, setInputs] = useState<InputsStateType>({
    userId: '',
    password: '',
    userName: '',
    userEmail: '',
    userPhone: '',
  })

  const { userId, password, userName, userEmail, userPhone } = inputs

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target
    setInputs({ ...inputs, [id]: value })
  }

  const inputOptions = [
    {
      title: 'ID',
      id: 'userId',
    },
    {
      title: 'PW',
      id: 'password',
    },
    {
      title: 'Name',
      id: 'userName',
    },
    {
      title: 'Email',
      id: 'userEmail',
    },
    {
      title: 'H.P',
      id: 'userPhone',
    },
  ]

  return (
    <LoginWrapper>
      <div className="inputs">
        {inputOptions.map(el => (
          <div key={el.id}>
            <Text size="16px">{el.title}</Text>
            <Input id={el.id} type={el.id === 'password' ? 'password' : 'text'} onChange={handleInputs} />
          </div>
        ))}
        <Button type="A" onClick={() => console.log(inputs)}>
          회원 가입
        </Button>
      </div>
    </LoginWrapper>
  )
}

const LoginWrapper = styled.div`
  height: 100%;

  .inputs {
    max-width: 700px;
    margin: auto;

    div {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0px;
      }

      p {
        min-width: 60px;
      }
    }
  }
`

export default Login
