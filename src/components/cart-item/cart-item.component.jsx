import React from 'react';
import {connect} from 'react-redux';

import './cart-item.styles.scss';

import {addItemToCart, removeItemFromCart} from '../../redux/cart/cart.actions';

const CartItem = ({ categoryId, item, addItemToCart, removeItemFromCart }) => {
    const { name, imageUrl, price, quantity } = item;

    return (
        <div className="cart-item">
            <div className="img-container">
                <img src={imageUrl} alt="" />
            </div>
            <div className="details">
                <span className="name">{name}</span>
                <div className="controls">
                    <div className="quantity">
                        <span className="minus"  onClick={() => removeItemFromCart({id: categoryId, item: item})}>-</span>
                        <span className="count">{quantity}</span>
                        <span className="plus"  onClick={() => addItemToCart({id: categoryId, item: item})}>+</span>
                    </div>
                    <span>x</span>
                    <div>
                        <span>$</span>
                        <span>{price}</span>
                    </div>
                </div>
            </div>
            <div className="total-amt">
                {quantity * price}
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addItemToCart: (payload) => dispatch(addItemToCart(payload)),
    removeItemFromCart: (payload) => dispatch(removeItemFromCart(payload))
})

export default connect(null,mapDispatchToProps)(CartItem);