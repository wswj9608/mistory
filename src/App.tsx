import React from 'react'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Landing from './pages/Landing'
import Join from './pages/Join'
import MyPage from './pages/MyPage'

const App = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
`

export default App
