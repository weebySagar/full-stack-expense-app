import React from 'react';
import {AiOutlineHome,AiOutlineWallet,AiOutlineCreditCard,AiOutlineUnorderedList,AiOutlineSetting} from 'react-icons/ai';
import {MdOutlineLeaderboard} from 'react-icons/md';
import {FiLogOut} from 'react-icons/fi'
import { CgProfile } from "react-icons/cg";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "../styles/sidebar/sidebar.scss"
import { useAuth } from '../context/AuthContext';

const Sidebar = ({user}) => {
    const {logout} = useAuth();
    const navigate = useNavigate();
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

    const sidebarItemsMobile = [
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
        // {
        //     icon:<AiOutlineCreditCard/>,
        //     title:'Payment',
        //     link:'/user/payment'
        // },
        // {
        //     icon:<AiOutlineUnorderedList/>,
        //     title:'To-do list',
        //     link:'/user/todos'
        // },
        // {
        //     icon:<AiOutlineSetting/>,
        //     title:'Settings',
        //     link:'/user/settings'
        // },
        // {
        //     icon:<FiLogOut/>,
        //     title:'Logout',
        //     link:'/user/logout'
        // }
        {
            icon:<CgProfile/>,
            title:'Profile',
            link:'/dashboard/profile'
        }
       
    ]
    const location =useLocation();

    const handleLogOut = (e)=>{
        e.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('user')
        logout()
        navigate('/user/login',{replace:true})
      }
    

  return (
    <div className='sidebar py-lg-4 text-center flex-grow-1 d-flex flex-lg-column'>
        <div className="app-logo d-none d-lg-block">
            <h3>Track Wise</h3>
        </div>
        <div className="content-wrapper">

        
        <div className="sidebar-list d-none d-lg-block" >
            {
                sidebarItems.map(item=>{
                   return( 
                
                    <Link className="sidebar-item d-flex flex-column flex-lg-row justify-content-center align-items-center mb-2 " id={item.link === location.pathname ? "active" : ''} to={item.link}  onClick={item.title == 'Logout' && handleLogOut} key={item.link}>
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
        <div className="sidebar-list mobile d-lg-none" >
            {
                sidebarItemsMobile.map(item=>{
                   return( 
                
                    <Link className="sidebar-item d-flex flex-column flex-lg-row justify-content-center align-items-center mb-2 " id={item.link === location.pathname ? "active" : ''} to={item.link}  onClick={item.title == 'Logout' && handleLogOut} key={item.link}>
                        <div className={`sidebar-icon col-4 ${item.title=='Logout' && "text-danger"}`}>
                            {item.icon}
                        </div>
                        <div className={`sidebar-title d-none d-sm-block col-8 text-center ${item.title=='Logout' && "text-danger"}`}>
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