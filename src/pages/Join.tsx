import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import { joinUser } from '../lib/api/user'
import { Button, Input, Text } from '../elements'
import { getErrorMessage } from '../utils'

const Join = () => {
  const navigator = useNavigate()
  const [inputs, setInputs] = useState<JoinUserDataType>({
    userId: '',
    password: '',
    userName: '',
    userEmail: '',
    userPhone: '',
  })

  // const { userId, password, userName, userEmail, userPhone } = inputs

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
      title: '이름',
      id: 'userName',
    },
    {
      title: 'H.P',
      id: 'userPhone',
    },
    {
      title: '이메일',
      id: 'userEmail',
    },
  ]

  interface Data {
    message: string
  }

  const setJoin = async () => {
    try {
      await joinUser(inputs)
      window.alert('회원가입이 완료 되었습니다.')
      navigator('/login')
    } catch (err) {
      const errorMessage = getErrorMessage(err)

      window.alert(errorMessage)
      console.error(err)
    }
  }

  return (
    <JoinWrapper>
      <Text className="logo" size="56px" weight="bold">
        Mistory
      </Text>
      <div className="inputs">
        {inputOptions.map(el => (
          <div key={el.id}>
            <Text size="18px">{el.title}</Text>
            <Input id={el.id} type={el.id === 'password' ? 'password' : 'text'} onChange={handleInputs} />
          </div>
        ))}
        <Button className="join-button" type="A" onClick={setJoin}>
          회원 가입
        </Button>
      </div>
    </JoinWrapper>
  )
}

const JoinWrapper = styled.div`
  height: 100%;
  padding-top: 120px;
  text-align: center;

  .inputs {
    text-align: start;
    width: fit-content;
    margin: 60px auto 0;

    input {
      width: 280px;
    }

    div {
      position: relative;
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 32px;

      &:last-child {
        margin-bottom: 0px;
      }

      p {
        position: absolute;
        left: -66px;
        width: 50px;
      }
    }
  }

  .join-button {
    width: 280px;
  }
`

export default Join
