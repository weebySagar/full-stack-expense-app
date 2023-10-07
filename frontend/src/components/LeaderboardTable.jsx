import React from "react";

const LeaderboardTable = ({leaderboardData}) => {
  
  
  return (
    <div >
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Total Expense</th>
           
          </tr>
        </thead>
        <tbody>
          {
            leaderboardData.map((item,index)=><tr>
              <td>{index+1}</td>
              <td>{item.user.name}</td>
              <td>{item.totalExpense}</td>
            </tr>)
          }
          
         
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
