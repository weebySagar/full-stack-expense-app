import LeaderboardTable from "./LeaderboardTable";
import "../styles/leaderboard/leaderboard.scss";
import { getLeaderboard } from "../services/premium-api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {useNavigate} from 'react-router-dom'

const Leaderboard = () => {
    const navigate = useNavigate();
    const [leaderboardData,setLeaderboardData] = useState([])

  useEffect(() => {
    getLeaderboard().then(data=>{
      setLeaderboardData(data)}).catch(error=>{
          navigate('/dashboard')
        toast.error(error);
    })
  }, [])
    return (
        <div className="leaderboard bg-7 rounded">
            <div className="container">
                <div className="inner-wrapper">
                    <div className="row justify-content-center">

                    <div className="col-8">
                    
                        <div className="text-content">
                            <h4>Leaderboard</h4>
                        </div>
                        <div className="leaderboard-table content-wrapper">
                            <LeaderboardTable leaderboardData={leaderboardData}/>
                        </div>
                    </div>    
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Leaderboard