import React from 'react'
import UserDetail from '../../components/UserDetail'
import UserStats from '../../components/UserStats'
import './style.css'
function Profile() {
    return (
        <div className='profile'>
            <UserDetail/>
            <UserStats/>
        </div>
    )
}

export default Profile