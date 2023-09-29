import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

const SignUpForm = () => {
    const navigate = useNavigate();
    const [userData,setUserData] = useState({
        name:'',
        email:'',
        password:''
    })

    const handeInputChange=(e)=>{
        const {name,value} = e.target;
        setUserData({
            ...userData,
            [name]:value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(userData);
    }
    return (
        <div className='singup-form'>
            <div className="content-wrapper">
            
            <form onSubmit={handleSubmit}>
            <div className="mb-3 group-input">
                    <label htmlFor="name" className="form-label subheading">Name</label>
                    <input type="text" className="form-control" id="name" name="name" aria-describedby="nameHelp" value={userData.name} onChange={handeInputChange}/>
                    
                
                </div>
                <div className="mb-3 group-input">
                    <label htmlFor="email" className="form-label subheading">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={userData.email} onChange={handeInputChange}/>
                    
                
                </div>
                <div className="mb-3 group-input">
                    <label htmlFor="password" className="form-label subheading">Password</label>
                    <input type="password" className="form-control" id="password" name='password' value={userData.password} onChange={handeInputChange}/>
                </div>
                
                <button type="submit" className="btn btn-primary mb-4">Create Account</button>
                <p>Already a Member ? <span style={{color:"#27c9d8"}} onClick={()=>navigate("/user/login")}>Log In</span></p>
                
            </form>
            </div>
        </div>
    )
}

export default SignUpForm