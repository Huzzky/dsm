import React from 'react';
import './css/nav-header.css';

function NH () {
    return (
        <div className="nh">
            <header className='header'>
                <nav className="nav">
                    <ul className="nav-li">
                        <li className="icon-nav"><img className="img-icon" src="" alt=""/></li>
                        <li className="nav-txt home-txt-nav">Home</li>
                        <li className="nav-txt srv-txt-nav">Service</li>
                        <li className="nav-txt ext-txt-nav">Extension</li>
                        <li className="nav-txt pri-txt-nav">Pricing</li>
                        <li className="nav-txt help-txt-nav">Help</li>
                        <button className="sign-up-nav">Sign Up</button>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default NH;