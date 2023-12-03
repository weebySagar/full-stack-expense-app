import React from 'react'
import DashboardHeader from './DashboardHeader';
import "../styles/expense-overview/expense-overview.scss"
import ExpenseOverviewContainer from './ExpenseOverviewContainer';
import Charts from './Charts';

const ExpenseOverview = () => {
  return (
    <div className='expense-overview'>
        <DashboardHeader/>
        <ExpenseOverviewContainer/>
        <Charts/>
        {/* <ExpenseOverviewContainer/> */}
    </div>
  )
}

export default ExpenseOverview