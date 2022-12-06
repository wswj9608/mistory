import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { joinUser, loginToAxios } from '../lib/api/user'
import { Button, Input, Text } from '../elements'
import { useMemberInfoInRecoil } from '../atoms/member'
import { getErrorMessage } from '../utils'

const Login = () => {
  const navigator = useNavigate()
  const [, setMemberInfo] = useMemberInfoInRecoil()
  const [inputs, setInputs] = useState<LoginInputType>({
    userId: '',
    password: '',
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
  ]

  const login = async () => {
    try {
      const { token, userName, userId, userEmail, userPhone } = await loginToAxios(inputs)
      window.localStorage.setItem('loginToken', token)

      setMemberInfo({ userId, userName, userEmail, userPhone })
      navigator('/')
    } catch (err) {
      const errorMessage = getErrorMessage(err)
      alert(errorMessage)
    }
  }

  return (
    <LoginWrapper>
      <Text className="logo" size="56px" weight="bold">
        Mistory
      </Text>
      <div className="inputs-wrap">
        {inputOptions.map(el => (
          <div key={el.id} className="inputs">
            <Text size="18px">{el.title}</Text>
            <Input id={el.id} type={el.id === 'password' ? 'password' : 'text'} onChange={handleInputs} />
          </div>
        ))}
        <Button className="login-button" type="A" onClick={login}>
          로그인
        </Button>
        <Link to="/join">
          <Text className="join" color="#555555">
            회원가입
          </Text>
        </Link>
      </div>
    </LoginWrapper>
  )
}

const LoginWrapper = styled.div`
  height: 100%;
  text-align: center;
  padding-top: 260px;

  .inputs-wrap {
    width: fit-content;
    margin: 60px auto 0;
  }

  .inputs {
    position: relative;
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 32px;

    &:last-child {
      margin-bottom: 0px;
    }

    p {
      position: absolute;
      left: -44px;
      width: 28px;
    }

    input {
      width: 280px;
    }

    div {
    }
  }

  .login-button {
    width: 280px;
  }

  .join {
    margin-top: 20px;
  }
`

export default Login
