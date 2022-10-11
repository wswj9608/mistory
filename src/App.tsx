import React from 'react'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'

const App = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/login" element={<Login />} />
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
