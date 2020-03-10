import React from 'react'
import './style.css'
import OrgCard from '../../components/OrgCard'
function OrgInfo() {
    return (
        <div className="orgMainDiv">
            <h1>click to see organization info</h1>
            <OrgCard/>
        </div>
    )
}

export default OrgInfo