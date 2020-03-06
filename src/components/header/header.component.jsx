import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import { auth } from '../../config-files/firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/images/crown_logo.svg';
import './header.styles.scss';

const Header = ({ currentUser }) => {
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
                {
                    currentUser ? <div onClick={() => auth.signOut()}>SIGN OUT</div>
                        : <Link to="/signin">Sign in </Link>
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);