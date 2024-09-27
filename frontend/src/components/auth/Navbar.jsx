import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import "@styles/navbar/navbar.scss";
import Logo from "@assets/navbar_logo.png"


const Navbar = () => {
    const navigate = useNavigate();
    return (
        <header>

            <nav className="navbar fixed-top bg-body-tertiary py-2">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="logo" className='navbar-brand' width={250} />
                    </Link>
                    <div className="button-wrapper d-none d-md-block">

                        <button className="btn-primary" onClick={() => navigate('/user/login')}>Log In</button>
                        <button className="btn-secondary mx-2" onClick={() => navigate('/user/signup')}>Create Account</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar