import React from 'react'
import './style.css'
import OrgCard from '../../components/OrgCard'
import DefaultHeader from '../../components/DefaultHeader'

function OrgInfo() {
    return (
        <div className="orgMainDiv">
            <DefaultHeader />
            <h1>click to see organization info</h1>
            <OrgCard/>
        </div>
    )
}

export default OrgInfo