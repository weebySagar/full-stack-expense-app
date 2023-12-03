import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate, Route ,Routes} from 'react-router-dom';

const AuthPage = ({Component, ...rest}) => {
    const {user} = useAuth();


    if(user) {
      return <Component {...rest}/>}
    else {

      return <Navigate to="/user/login" replace/>
    }
    // return(
    //   <Routes>
    //   <Route 
    //     {...rest}
    //     render={(props)=> isAuthenticated ? <Component {...props}/> : <Navigate to="/login"/>}
    //   />
    //   </Routes>
    // )
}

export default AuthPage