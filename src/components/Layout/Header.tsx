import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { Text } from '../../elements'

const Header = () => {
  const navigate = useNavigate()

  return (
    <HeaderWrapper>
      <div className="wrap">
        <div className="logo"></div>
        <div className="right">
          <Link to="/mypage">
            <Text>MY</Text>
          </Link>
          <Text onClick={() => navigate('/login')}>로그아웃</Text>
        </div>
      </div>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;

  .wrap {
    max-width: 940px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    width: 150px;
    height: 60px;
    background-color: red;
  }

  .right {
    display: flex;
    gap: 32px;

    a {
      text-decoration: none;
    }
  }
`

export default Header
