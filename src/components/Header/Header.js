import React from 'react';
import user from '../../images/user.png';
import { Link } from 'react-router-dom'
import "./Header.scss"

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <div className="logo">Movie app</div>
            </Link>
            <div className="user-img">
                <img src='https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg' alt="user"></img>
            </div>
        </div>
    );
};

export default Header;
