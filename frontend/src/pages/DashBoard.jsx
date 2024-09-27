import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import PremiumUser from '../components/PremiumUser'
import { getUserDetails } from '../services/user-api'
import Profile from '../components/Profile';
import "../styles/dashboard/dashboard.scss"
import { useAuth } from '../context/AuthContext'
import Navbar from '@/components/dashboard/Navbar'

const DashBoard = () => {
    const { user } = useAuth();

    return (
        <section className='dashboard py-2 vh-100'>
            {/* <div className="container-fluid d-flex flex-column justify-content-between h-100"> */}
            <div className="container-fluid h-100">
                <Navbar />
                <Outlet context={{ user }} />
                {/* <div className="row h-100">
            <div className="col-12 col-lg-3 col-xxl-2 d-flex flex-column " >
                

                <Sidebar user={user}/>
                <PremiumUser isPremiumUser={user?.premiumUser}/>
                
            </div>
            <div className="col-12 col-lg-9 col-xxl-8 outlet">
                <Outlet context={{user}}/>
                
            </div>
            <div className="d-none d-xxl-block col-2">
                <Profile user={user}/>
            </div>
        </div> */}
            </div>
        </section>
    )
}

export default DashBoard