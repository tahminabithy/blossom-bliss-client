import React, { useContext } from 'react'
import { authContext } from '../context/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivateRoute({ children }) {
    const { user, loading } = useContext(authContext)
    const location = useLocation()
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user) {
        return children
    }
    return (
        <Navigate to='/login' state={{ from: location }} replace />
    )
}
