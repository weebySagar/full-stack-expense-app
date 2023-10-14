import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import {Outlet} from  'react-router-dom'
import PremiumUser from '../components/PremiumUser'
import { getUserDetails } from '../services/user-api'
import Profile from '../components/Profile';
import "../styles/dashboard/dashboard.scss"

const DashBoard = () => {
    const [user,setUser] = useState({});

    useEffect(() => {
        getUserDetails().then((user)=>setUser(user))
     
    }, [])
   
   
  return (
   <section className='dashboard py-2 vh-100'>
    {/* <div className="container-fluid d-flex flex-column justify-content-between h-100"> */}
        <div className="container-fluid h-100">
            

        <div className="row h-100 row-gap-4">
            <div className="col-2 d-flex flex-column justify-content-between" >
                

                <Sidebar/>
                <PremiumUser isPremiumUser={user?.premiumUser}/>
                
            </div>
            <div className="col-8">
                <Outlet/>
                
            </div>
            <div className="col-2">
                <Profile user={user}/>
            </div>
        </div>
    </div>
   </section>
  )
}

export default DashBoard