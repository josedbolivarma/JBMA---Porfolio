import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

const DashboardRoutes = () => {
  return (
    <div>
    <Routes>
        {/* Dashboard */}
        <Route path='/' element={<Home />}/>
        {/* Dashboard */}
    </Routes>
    </div>
  )
}

export default DashboardRoutes