import React from 'react'
import Profile from '../components/Profile'
import { useAuth } from '../context/AuthContext';

const ProfilePage = () => {
  const {user} = useAuth();

  return (
    <section className='profile-page vh-100 d-flex flex-column justify-content-center align-items-center'>
            <div className="container">
                {/* <div className="profile-wrapper">
                    <div className="profile-container bg-7">

                    </div>
                </div> */}
                <Profile user={user}/>
            </div>
    </section>
  )
}

export default ProfilePage