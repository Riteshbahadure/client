import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const UserProtected = ({ compo }) => {
    const { user } = useSelector(state => state.auth)
    return (user && user.role === "customer") ? compo : <Navigate to="/login" />
}

export default UserProtected