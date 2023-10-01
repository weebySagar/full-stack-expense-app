import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {  Link,useNavigate } from 'react-router-dom';

import {loginUser} from '../services/user-api'

const LogInForm = () => {
    const navigate = useNavigate();
    const [userData,setUserData] = useState({
        email:'',
        password:''
    })

    const [errors, setErrors] = useState({
        email: '',
        password:''
      });

    const handeInputChange=(e)=>{
        const {name,value} = e.target;
        setUserData({
            ...userData,
            [name]:value
        })
    }

    const validateForm = () => {
        let valid = true;
        const newErrors = { ...errors };
    
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(userData.email.trim()=== ''){
            newErrors.email = 'Email is required';
            valid=false;
        }
         else if (!emailRegex.test(userData.email.trim())) {
          newErrors.email = 'Invalid email address';
          valid = false;
        } else {
          newErrors.email = '';
        }

         // Name validation
         if (userData.password.trim() === '') {
            newErrors.password = 'Password is required';
            valid = false;
          } else {
            newErrors.password = '';
          }
    
        setErrors(newErrors);
        return valid;
      };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(validateForm()){
            const data =loginUser(userData);
          
          toast.promise(data,{
            loading:'Hang on...',
            success:()=>{
            setUserData({
              email:'',
              password:''
            });
            navigate('/dashboard')
            return `Login successfully`
          },
            error:(err)=>err.toString()
          })
        }
    }
    return (
        <div className='singup-form'>
            <div className="content-wrapper">
            
            <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3 group-input">
                    <label htmlFor="email" className="form-label subheading">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={userData.email} onChange={handeInputChange}/>
                </div>
                {errors.email && <p className='text-danger'>{errors.email}</p>}


                <div className="mb-3 group-input">
                    <label htmlFor="password" className="form-label subheading">Password</label>
                    <input type="password" className="form-control" id="password" name='password' value={userData.password} onChange={handeInputChange}/>
                </div>
                {errors.password && <p className='text-danger'>{errors.password}</p>}

                
                <button type="submit" className="btn btn-primary mb-4">Log In</button>
                <p>Don't have an account ? <Link style={{color:"#27c9d8"}} to="/user/signup">Create Account</Link></p>
                
            </form>
            </div>
        </div>
    )
}

export default LogInForm