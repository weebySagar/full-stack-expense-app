import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import "../styles/navbar/navbar.scss";


const Navbar = () => {
    const navigate = useNavigate();
    return (
        <header>

        <nav class="navbar fixed-top bg-body-tertiary py-4">
            <div class="container">
                <Link class="navbar-brand" to="/">Track Wise</Link>
                <div className="button-wrapper d-none d-md-block">

                <button className="btn-primary" onClick={()=>navigate('/user/login')}>Log In</button>
                <button className="btn-secondary mx-2" onClick={()=>navigate('/user/signup')}>Create Account</button>
                </div>
            </div>
        </nav>
        </header>
    )
}

export default Navbar