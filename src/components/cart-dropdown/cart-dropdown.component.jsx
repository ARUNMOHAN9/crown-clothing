import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import './cart-dropdown.styles.scss';

import {toggleCartDropdown} from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({cartItems, history, dispatch}) => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map( (category) => category.item.map( (item) => <CartItem key={`c${category.id}p${item.id}`} categoryId={category.id} item={item}/>))}
            </div>
            <CustomButton classes="primary-btn"
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartDropdown());
              }}>go to checkout</CustomButton>
        </div>
    );
}

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));