import React from 'react'
import { Outlet } from 'react-router-dom'

const Profile = () => {
    return (
        <div>
            <a href='/myaccount'>My Accounts</a>
            <br />
            <a href='/mysetting'>My Settings</a>
            <Outlet />
        </div>

    )
}

export default Profile