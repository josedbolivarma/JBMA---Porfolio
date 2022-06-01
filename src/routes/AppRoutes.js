import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
// import Sidebar from '../components/sidebar/Sidebar';
import DashboardRoutes from './DashboardRoutes';
const AppRoutes = () => {
  
  return (
    <Router>
      <Header />
        <Routes>
            <Route path='/*' element={
                <DashboardRoutes />
            }/>

      </Routes>
    </Router>
  )
}

export default AppRoutes