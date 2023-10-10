import React, { useState } from 'react';
import "../styles/signup-page/signup-page.scss"
import { forgotpassword } from '../services/password-api';
import toast from 'react-hot-toast';

const ForgotPasswordForm = () => {
    const [email,setEmail] =useState('');


    const [errors, setErrors] = useState({
        email: '',
      });

    const handeInputChange=(e)=>{
        const {value} = e.target;
        setEmail(value)
    }

    const validateForm = () => {
        let valid = true;
        const newErrors = { ...errors };
    
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(email.trim()=== ''){
            newErrors.email = 'Email is required';
            valid=false;
        }
         else if (!emailRegex.test(email.trim())) {
          newErrors.email = 'Invalid email address';
          valid = false;
        } else {
          newErrors.email = '';
        }

        setErrors(newErrors);
        return valid;
      };

      const handleSubmit=(e)=>{
        e.preventDefault();
        if(validateForm()){
            const response = forgotpassword(email);
            toast.promise(response,{
                loading:'Hang on...',
                success:(msg)=>{
                    setEmail('');
                    return msg},
                error:(err)=>err
            })
        }
    }
  return (
    <div className='forgot-password-form signup h-100'>
        <div className="container h-100">
            
            <div className="row justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-6">
                    {/* <div className="card"> */}
                        <div className=" text-center text-content">
                            <div className="subheading">
                                <h3>
                                    Forgot Password ?
                                </h3>
                            </div>
                            <div className="description my-4">
                                <p>Enter your email , we will send you a reset password link</p>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} noValidate className="w-100">


                            <div className="mb-3 group-input">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" name="email" value={email} onChange={handeInputChange}
                                    aria-describedby="newPassword" required/>
                            </div>
                            {errors.email && <p className='text-danger'>{errors.email}</p>}

                            <div className="button-wrap my-4">

                                <button type="submit" className="w-100 my-4 btn-primary">Change Password</button>
                            </div>
                        </form>
                    {/* </div> */}
                </div>
            </div>
           
        </div>

    </div>
  )
}

export default ForgotPasswordForm