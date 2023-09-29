import React from 'react';
import Navbar from '../components/Navbar';
import SignUpForm from '../components/SignUpForm';;
import "../styles/signup-page/signup-page.scss";




const SignUpPage = () => {
    return (
        <>
            <Navbar />
            <section className="signup position-absolute h-100 w-100 d-flex  align-items-center">


                <div className="container">
                    <div className="inner-wrapper">
                        <div className="row">
                            <div className="col-12 col-md-8 col-lg-5">
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUpPage