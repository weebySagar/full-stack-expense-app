import React from 'react';
import {AiOutlineHome,AiOutlineWallet,AiOutlineCreditCard,AiOutlineUnorderedList,AiOutlineSetting} from 'react-icons/ai';
import {MdOutlineLeaderboard} from 'react-icons/md';
import {FiLogOut} from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom';
import "../styles/sidebar/sidebar.scss"

const Sidebar = () => {
    const sidebarItems = [
        {
            icon:<AiOutlineHome/>,
            title:'Dashboard',
            link:'/dashboard'
        },
        {
            icon:<AiOutlineWallet/>,
            title:'Expense',
            link:'/dashboard/expense'
        },
        {
            icon:<MdOutlineLeaderboard/>,
            title:'Leaderboard',
            link:'/dashboard/leaderboard'
        },
        {
            icon:<AiOutlineCreditCard/>,
            title:'Payment',
            link:'/user/payment'
        },
        {
            icon:<AiOutlineUnorderedList/>,
            title:'To-do list',
            link:'/user/todos'
        },
        {
            icon:<AiOutlineSetting/>,
            title:'Settings',
            link:'/user/settings'
        },
        {
            icon:<FiLogOut/>,
            title:'Logout',
            link:'/user/logout'
        }
       
    ]

    const location =useLocation();
    

  return (
    <div className='sidebar py-4 text-center '>
        <div className="app-logo">
            <h3>Track Wise</h3>
        </div>
        <div className="content-wrapper">

        
        <div className="sidebar-list" >
            {
                sidebarItems.map(item=>{
                   return( 
                
                    <Link className="sidebar-item d-flex justify-content-center align-items-center mb-2 " id={item.link === location.pathname && "active"} to={item.link}>
                        <div className={`sidebar-icon col-4 ${item.title=='Logout' && "text-danger"}`}>
                            {item.icon}
                        </div>
                        <div className={`sidebar-title col-8 text-start ${item.title=='Logout' && "text-danger"}`}>
                            {item.title}
                        </div>
                    </Link>
                   )
                })
            }
        </div>
        </div>
    </div>
  )
}

export default Sidebar