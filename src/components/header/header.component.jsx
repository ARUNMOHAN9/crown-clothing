import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/images/crown_logo.svg';

import  './header.styles.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="logo_container">
                <Link to="/">
                    <Logo className="logo" />
                </Link>
            </div>
            <div className="action_container">
                <Link to="/shop">
                    Shop
                </Link>
                <Link to="/shop">
                    Contact
                </Link>
            </div>
        </div>
    );
}

export default Header;