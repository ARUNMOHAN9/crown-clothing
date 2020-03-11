import React from 'react';
import {connect} from 'react-redux';

import {ReactComponent as CartIcon} from '../../assets/images/shopping_bag.svg';
import './cart-icon.styles.scss';

const CartIconComponent = ({cartItems}) => {
    let quantity = 0;
    for(let i =0; i < cartItems.length; i++) {
        for(let j =0; j < cartItems[i].item.length; j++) {
            quantity += cartItems[i].item[j].count;
        }
    }
    return (
        <div className="cart-icon">
            <CartIcon className="shopping-icon"/>
            <span className="item-count">{quantity}</span>
        </div>
    );
}

const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps, null)(CartIconComponent);