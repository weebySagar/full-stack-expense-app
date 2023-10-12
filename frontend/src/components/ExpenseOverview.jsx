import React from 'react'
import DashboardHeader from './DashboardHeader';
import "../styles/expense-overview/expense-overview.scss"
import ExpenseOverviewContainer from './ExpenseOverviewContainer';

const ExpenseOverview = () => {
  return (
    <div className='expense-overview'>
        <DashboardHeader/>
        <ExpenseOverviewContainer/>
    </div>
  )
}

export default ExpenseOverview