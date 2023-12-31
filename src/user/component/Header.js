import React from 'react';
import { Link } from 'react-router-dom'
import MyLink from '../UI/Link/MyLink';

function Header(props) {
    let localdata = localStorage.getItem('loginStatus');

    const hendalLogout = () => {
        localStorage.removeItem("loginStatus")
    }

    return (
        <div className="main-header">
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                        <i className="bi bi-phone" /> +91 9988776655
                    </div>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        <MyLink href="#" className="twitter"><i className="bi bi-twitter" /></MyLink>
                        <MyLink href="#" className="facebook"><i className="bi bi-facebook" /></MyLink>
                        <MyLink href="#" className="instagram"><i className="bi bi-instagram" /></MyLink>
                        <MyLink href="#" className="linkedin"><i className="bi bi-linkedin" /></MyLink>
                    </div>
                </div>
            </div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <div className="logo">
                        <a href="index.html">
                            <h1 className="logo me-auto">City</h1><br />
                            <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                        </a>
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><Link className="nav-link scrollto active" to={"/"} >Home</Link></li>
                            <li><Link className="nav-link scrollto" to={"/departments"}>Departments</Link></li>
                            <li><Link className="nav-link scrollto" to={"/doctors"}>Doctors</Link></li>
                            <li><Link className="nav-link scrollto " to={"/about"}>About</Link></li>
                            <li><Link className="nav-link scrollto" to={"/contact"}>Contact</Link></li>
                            <li><Link className="nav-link scrollto" to={"/Fromvalidetion"}>From</Link></li>
                            <li><Link className="nav-link scrollto" to={"/MedicineUser"}>MedicineUser</Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    <Link to={'/appointment'} className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span>
                        Appointment</Link>

                    {
                        localdata ?
                            <Link to={"/"} className="appointment-btn scrollto" onClick={hendalLogout}>
                                <span className="d-none d-md-inline">Logout</span>
                            </Link> :
                            <Link to={"/auth"} className="appointment-btn scrollto">
                                <span className="d-none d-md-inline">Login/ Signup</span>
                            </Link>
                    }
                </div>
            </header>
        </div>

    );
}

export default Header;