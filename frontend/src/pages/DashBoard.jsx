import React from 'react'
import Sidebar from '../components/Sidebar'
import {Route, Routes,Outlet} from  'react-router-dom'

const DashBoard = () => {
  return (
   <section className='dashboard py-2'>
    <div className="container-fluid">
        <div className="row">
            <div className="col-2">
                <Sidebar/>
            </div>
            <div className="col-8">
                <Outlet/>
                
            </div>
            <div className="col-3"></div>
        </div>
    </div>
   </section>
  )
}

export default DashBoard