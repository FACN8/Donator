import React from 'react'
import { Link } from "react-router-dom";


function DonationPage() {
    return (
        <div>
             <nav>
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
      </nav>
        </div>
    )
}

export default DonationPage