import React from 'react'
import { Link } from 'react-router-dom';
import {IoMdAdd} from 'react-icons/io'
import { AiOutlineWallet } from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';
import { CgProfile } from "react-icons/cg";


const DashboardHeader = () => {
  return (
    <div className='expense-header mt-4 d-flex'>
        <div className="expense-search flex-grow-1 d-flex align-items-center">
            <BsSearch/>
            <input type="text" placeholder='Search about expenses' className='ms-4'/>
        </div>
        <div className="expense-add-btn">
            <Link to='/dashboard/expense/addExpense'>
                <IoMdAdd/>
            </Link>
        </div>
        <div className="expenses-btn">
        <Link>
        <AiOutlineWallet/>
            </Link>
        </div>
    </div>
  )
}

export default DashboardHeader