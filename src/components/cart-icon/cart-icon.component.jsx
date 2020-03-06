import React from 'react';

import {ReactComponent as CartIcon} from '../../assets/images/shopping_bag.svg';
import './cart-icon.styles.scss';

const CartIconComponent = () => {
    return (
        <div className="cart-icon">
            <CartIcon className="shopping-icon"/>
            <span className="item-count">9</span>
        </div>
    );
}

export default CartIconComponent;