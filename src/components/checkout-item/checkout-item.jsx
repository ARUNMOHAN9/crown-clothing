import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.styles.scss';

import { addItemToCart, removeItemFromCart } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, categoryId, addItemToCart, removeItemFromCart }) => {

  const { name, imageUrl, price, quantity } = cartItem;
  return (<div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className="quantity">
      <div className='arrow' onClick={() => removeItemFromCart({ id: categoryId, item: cartItem })}>
        &#10094;
        </div>
      <span className='value'>{quantity}</span>
      <div className='arrow' onClick={() => addItemToCart({ id: categoryId, item: cartItem })}>
        &#10095;
        </div>
    </span>
    <span className='price'>{price}</span>
    <div className='remove-button'>&#10005;</div>
  </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (payload) => dispatch(addItemToCart(payload)),
  removeItemFromCart: (payload) => dispatch(removeItemFromCart(payload))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);