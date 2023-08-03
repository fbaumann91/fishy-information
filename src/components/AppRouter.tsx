import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Region from '../pages/Region'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/region/:id" element={<Region />} />
    </Routes>
  )
}

export default AppRouter