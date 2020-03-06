import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../config-files/firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/images/crown_logo.svg';
import './header.styles.scss';

import CartIconComponent from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {toggleCartDropdown} from '../../redux/cart/cart.actions';

const Header = ({ currentUser, hideCartDropDown, toggleCartDropdown }) => {
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
                <span onClick={toggleCartDropdown}><CartIconComponent/></span>
            </div>
            {hideCartDropDown ? null : <CartDropdown />}
        </div>
    );
}

const mapStateToProps = ({ user: { currentUser }, cart: { hideCartDropdown } }) => ({
    currentUser: currentUser,
    hideCartDropDown: hideCartDropdown
});

const mapDispatchToProps = (dispatch) => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);