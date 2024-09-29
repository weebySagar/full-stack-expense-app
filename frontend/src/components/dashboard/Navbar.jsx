import React from 'react'
import { AiOutlineCreditCard, AiOutlineHome, AiOutlineSetting, AiOutlineUnorderedList, AiOutlineWallet } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import { MdOutlineLeaderboard } from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom';
import '@styles/dashboard/navbar.scss'

export default function Navbar() {

    const navbarItems = [
        {
            icon: <AiOutlineHome size={24} />,
            title: 'Dashboard',
            link: '/dashboard'
        },
        {
            icon: <AiOutlineWallet size={24} />,
            title: 'Expense',
            link: '/expenses'
        },
        {
            icon: <MdOutlineLeaderboard size={24} />,
            title: 'Leaderboard',
            link: '/leaderboard'
        },
        {
            icon: <AiOutlineCreditCard size={24} />,
            title: 'Payment',
            link: '/payment'
        },
        {
            icon: <AiOutlineUnorderedList size={24} />,
            title: 'To-do list',
            link: '/todos'
        },
        {
            icon: <AiOutlineSetting size={24} />,
            title: 'Settings',
            link: '/settings'
        },
        {
            icon: <FiLogOut size={24} />,
            title: 'Logout',
            link: '/logout'
        }

    ]
    return (
        <header>
            <div className="container-fluid">
                <div className='dashboard-navbar bg-7 rounded'>
                    <div className="app-logo">
                        <h3>Track Wise</h3>
                    </div>

                    <div className="nav-link-items">
                        <ul>
                            {
                                navbarItems.map(data => <LinkItem key={data.link} {...data} />)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}


const LinkItem = ({ icon, link, title }) => {

    return (
        <NavLink className='link-item' to={link}>{icon}{title}</NavLink>
    )
} 