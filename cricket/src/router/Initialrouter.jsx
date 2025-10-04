import React from 'react'
import RenderHome from '../components/RenderHome'
import { Route, Routes } from 'react-router-dom'
const Initialrouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RenderHome />} />
    </Routes>
  )
}

export default Initialrouter
