import React from 'react'
import DashboardHeader from './DashboardHeader';
import "../styles/expense-overview/expense-overview.scss"
import ExpenseOverviewContainer from './ExpenseOverviewContainer';
import Charts from './Charts';
import ExpenseOverviewTable from './ExpenseOverviewTable';

const ExpenseOverview = () => {
  return (
    <div className='expense-overview'>
      {/* <DashboardHeader/> */}
      <ExpenseOverviewContainer />
      <Charts />
      <ExpenseOverviewTable />
      {/* <ExpenseOverviewContainer/> */}
    </div>
  )
}

export default ExpenseOverview