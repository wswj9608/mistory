import React, { useState } from 'react'
import styled from 'styled-components'
import { joinUser, loginToAxios } from '../lib/api/user'
import { Button, Input, Text } from '../elements'
import { useMemberInfoInRecoil } from '../atoms/member'

const Login = () => {
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
    const res = await loginToAxios(inputs)
    setMemberInfo(res)

    console.log(res)
  }

  return (
    <LoginWrapper>
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
        <Button className="login-button" type="A" onClick={login}>
          로그인
        </Button>
        <Text className="join" color="#555555">
          비밀번호 찾기 <span>|</span> 회원가입
        </Text>
      </div>
    </LoginWrapper>
  )
}

const LoginWrapper = styled.div`
  height: 100%;
  text-align: center;
  padding-top: 260px;

  .inputs {
    width: fit-content;
    margin: 60px auto 0;

    input {
      width: 280px;
    }

    div {
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
    }
  }

  .login-button {
    width: 280px;
  }

  .join {
    margin-top: 20px;
    span {
      color: #dddddd;
      margin: 0px 20px;
    }
  }
`

export default Login
