import React from 'react'
import { Link, Navigate} from 'react-router-dom'

const NotFound = () => {

    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) return <Navigate to="/createprofile"/>

    return (
        <div>
            <h1>Home</h1>
            <Link to={'/signin'}>SignIn</Link>
        </div>
    )
}

export default NotFound