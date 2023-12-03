import React from 'react'

const ExpenseOverviewContainerData = ({item}) => {
    
  return (
    <div className="col col-12 col-md-4">
    <div className='expense-container-item  px-4'>
        <div className="inner-wrapper">
            <div className="heading">
                <h4>{item.title}</h4>
            </div>
            <div className="price my-2">
                <h2>{item.amount}</h2>
            </div>
            <div className="frequency position-absolute ">
            <span className="badge rounded-pill text-bg-light px-3 py-2 ">Daily</span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ExpenseOverviewContainerData