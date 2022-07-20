import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <div className="logo">Movie app</div>
            </Link>
            <div className="user-img">
                <img src={ } alt="user"></img>
            </div>
        </div>
    );
};

export default Header;
