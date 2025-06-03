import React from 'react';
import './header.css';
import img from './qubit.png'

const Header = () => {
    return (
        <div className='container'>
        <nav className="navbar container">
            <div>
                <span>
                    <img className="navbar-logo" src={img} alt=""/>
                </span>
            </div>
            <ul className="navbar-links">
                <li><a>Why Qubit?</a></li>
                <li><a>Products</a></li>
                <li><a>Solutions</a></li>
                <li><a>Customers</a></li>
                <li><a>Case studies</a></li>
                <li><a>Resources</a></li>
                <li><a>More</a></li>
            </ul>
            <div className="navbar-actions">
                <button className="navbar-button">Book a demo</button>
                <a className="navbar-login">Log In</a>
            </div>
        </nav>

            <div className="section container">
                <div className="content">
                    <div className="text-content col-6">
                        <p>Driving growth with personalization.</p>
                        <h1 className='txt-1'>Make ecommerce <br/> <span>More personal.</span></h1>
                        <p className='p-txt'>Hundreds of brands use <strong>Qubit CommerceAI</strong> to power the next generation of product recommendations, badging, and insights to build exceptional customer experiences.</p>
                        
                    </div>

                </div>
            </div>


        </div>
    );
}
export default Header