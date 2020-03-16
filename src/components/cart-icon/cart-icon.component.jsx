import React from 'react';
import {connect} from 'react-redux';

import {ReactComponent as CartIcon} from '../../assets/images/shopping_bag.svg';
import './cart-icon.styles.scss';

const CartIconComponent = ({totalQuantity}) => {
    return (
        <div className="cart-icon">
            <CartIcon className="shopping-icon"/>
            <span className="item-count">{totalQuantity}</span>
        </div>
    );
}

const mapStateToProps = ({cart:{totalQuantity}}) => ({
    totalQuantity
})

export default connect(mapStateToProps, null)(CartIconComponent);