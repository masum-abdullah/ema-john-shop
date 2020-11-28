import React from 'react';
import logo from '../../images/logo.png';
import './header.css';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <a href="/Home"><img src={logo} alt=""/></a>
                <nav>
                    <a href="/Shop">Shop</a>
                    <a href="/Review">Order Review</a>
                    <a href="/Manage">Manage Inventory</a>
                </nav>
            
            </div>
        </div>
    );
};

export default Header;