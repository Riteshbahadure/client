import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './share/AllRoutes'
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.min.css"
import AdminUsers from './components/AdminUsers'
import AdminProduct from './components/AdminProduct'
const App = () => {
  return <div className='dark'>
    <ToastContainer />
    {/* <AdminUsers /> */}
    {/* <AdminProduct /> */}
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  </div>
}

export default App