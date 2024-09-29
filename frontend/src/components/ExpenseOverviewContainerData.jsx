import React from 'react'

const ExpenseOverviewContainerData = ({ item }) => {

  return (
    <div className="col col-12 col-md-4">
      <div className='expense-container-item  px-4'>
        <div className="py-4">
          <div className="heading">
            <p>{item.title}</p>
          </div>
          <div className="price my-2">
            <p><b>{item.amount ? item.amount : 0}</b></p>
          </div>
          <div className="frequency  ">
            <span className="badge rounded-pill text-bg-light px-3 py-2 ">Daily</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpenseOverviewContainerData