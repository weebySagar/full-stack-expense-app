import React from 'react';
import Navbar from '../components/auth/Navbar';
import SignUpForm from '../components/form/SignUpForm';;
import "../styles/signup-page/signup-page.scss";
import LogInImage from "../assets/login.svg"





const SignUpPage = () => {
    return (
        <>
            <Navbar />
            <section className="signup position-absolute h-100 w-100 d-flex  align-items-center">


                <div className="container">
                    <div className="inner-wrapper">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6 col-lg-5 order-2 order-md-1">
                                <div className="text-content">
                                    <div className="subheading">
                                        <p>
                                            START FOR FREE
                                        </p>
                                    </div>
                                    <div className="heading">
                                        <h1>

                                            Create new account
                                        </h1>
                                    </div>
                                </div>
                                <div className="signup-form-container">
                                    <SignUpForm />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-7 order-1 order-md-2">
                                <div className="img-wrapper">
                                    <img src={LogInImage} alt="" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUpPage