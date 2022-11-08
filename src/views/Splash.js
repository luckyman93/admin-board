import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import logIcon from "../assets/images/logo.png"

const NotFound = () => {

    let navigate = useNavigate();
    const onClick = () => {
        navigate('/signin')
    }

    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) return <Navigate to="/createmachine"/>

    return (
        <div className="simple-logo full-width" onClick={onClick}>
            <img src={logIcon} />
        </div>
    )
}

export default NotFound