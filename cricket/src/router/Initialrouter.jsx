import React from 'react'
import RenderHome from '../components/RenderHome'
import { Route, Routes } from 'react-router-dom'
import CommonID from '../components/CommonID'
import onlineBookingData from "../data/OnlineBookingId.json"

const Initialrouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RenderHome />} />
      <Route path="/onlinebooking" element={<CommonID data={onlineBookingData} />} />
    </Routes>
  )
}

export default Initialrouter
