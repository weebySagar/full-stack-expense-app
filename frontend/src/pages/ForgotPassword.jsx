import React from 'react'
import Navbar from '@components/auth/Navbar'
import ForgotPasswordForm from '@components/form/ForgotPasswordForm'

const ForgotPassword = () => {
  return (
    <div className='forgot-password vh-100'>
      <Navbar />
      <ForgotPasswordForm />

    </div>
  )
}

export default ForgotPassword