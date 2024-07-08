import React from 'react'
import Sidebar from '../components/Sidebar'
import Order from '../components/Order'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    return <>
        <Sidebar />
        <Outlet />
        {/* <Order /> */}
    </>
}

export default Dashboard