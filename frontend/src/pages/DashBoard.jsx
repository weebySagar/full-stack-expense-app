import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import {Route, Routes,Outlet} from  'react-router-dom'
import PremiumUser from '../components/PremiumUser'
import { getUserDetails } from '../services/user-api'

const DashBoard = () => {
    const [user,setUser] = useState({});

    useEffect(() => {
        getUserDetails().then((user)=>setUser(user))
     
    }, [])
   
   
  return (
   <section className='dashboard py-2 vh-100'>
    <div className="container-fluid d-flex flex-column justify-content-between h-100">
        <div className="row">
            <div className="col-2">
                <Sidebar/>
            </div>
            <div className="col-8">
                <Outlet/>
                
            </div>
            <div className="col-2"></div>
        </div>
        <div className="row">
            <div className="col-2">
                <PremiumUser isPremiumUser={user?.premiumUser}/>
            </div>
            <div className="col-8">
               
                
            </div>
            <div className="col-3"></div>
        </div>
    </div>
   </section>
  )
}

export default DashBoard