import React from 'react';
import {connect} from 'react-redux';

import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({cartItems}) => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map( (category) => category.item.map( (item) => <CartItem key={`c${category.id}p${item.id}`} categoryId={category.id} item={item}/>))}
            </div>
            <CustomButton classes="primary-btn">go to checkout</CustomButton>
        </div>
    );
}

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropdown);