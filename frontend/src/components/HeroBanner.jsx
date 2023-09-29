import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/hero-banner/hero-banner.scss";
import Image from "../assets/herobannerbg.png";


const HeroBanner = () => {
const navigate = useNavigate()
    return (
        <section className='hero-banner mt-4'>
            <div className="container">
                <div className="inner-wrapper">

                
                <div className="row flex-column-reverse flex-lg-row align-items-center">
                    <div className="col-12 col-md-12 col-lg-6 ">
                    <div className="inner-wrapper">
                        <div className="text-content">
                            <div className="subtitle">
                                <h1>Effortless Expense Tracking for a Bright Financial Future</h1>
                            </div>
                            <div className="content-wrapper">

                            
                            <div className="description">
                                <p>
                                    TrackWise is your go-to solution for hassle-free expense tracking. Take control of your financial journey with ease and confidence. Seamlessly monitor your spending, set personalized budgets, and gain valuable insights into your financial habits. With TrackWise, managing your money has never been more intuitive. Say hello to a brighter financial future – start using TrackWise today!
                                </p>
                            </div>
                            </div>
                            <div className="button-wrapper">

                                <button className="btn-primary" onClick={()=>navigate('/user/login')}>Log In</button>
                                <button className="btn-secondary mx-2" onClick={()=>navigate('/user/signup')}>Create Account</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6 ">
                        <div className="image-wraper">
                            <img src={Image} alt="" className='img-fluid'/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default HeroBanner