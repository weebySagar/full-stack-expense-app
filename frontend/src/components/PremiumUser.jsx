import React from 'react';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import "../styles/premium-user/premium-user.scss";
import { Link } from 'react-router-dom';
import { createPaymentOrder } from '../services/payment-api';

const PremiumUser = () => {
    return (
        <div className='premium-user bg-7 text-center rounded'>
            <div className="inner-wrapper">
                <div className="container">
                    <div className="content-wrapper">

                        <Link to='#' onClick={()=>createPaymentOrder()}>
                        <div className="premium-logo">


                            <span className="premium-img">
                                <BsFillRocketTakeoffFill />
                            </span>


                        </div>
                        <div className="text-content mt-4">


                            <div className="heading">
                                <h4>Upgrade to Pro</h4>
                            </div>
                            <div className="subheading">
                                <p>Checkout the TrackWise Pro
                                    with various features in built
                                </p>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PremiumUser