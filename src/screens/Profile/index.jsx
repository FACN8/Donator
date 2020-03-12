import React from 'react'
import { Link } from "react-router-dom";
import UserDetail from '../../components/UserDetail'
import UserStats from '../../components/UserStats'
import './style.css'
function Profile() {
    return (
        <div className='profile'>
        <ul className="nav_row">
          <li>
            <Link to="/OrgInfo">Home</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/">LogOut</Link>
          </li>
        </ul>
            <UserDetail/>
            <UserStats/>
        </div>
    )
}

export default Profile