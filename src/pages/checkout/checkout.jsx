import React from 'react';
import { connect } from 'react-redux';

import CheckoutItem from '../../components/checkout-item/checkout-item';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total=20 }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
     {cartItems.map( (category) => category.item.map( (item) => 
        <CheckoutItem key={`c${category.id}p${item.id}`} categoryId={category.id} cartItem={item}/>
    ))}
    <div className='total'>TOTAL: ${total}</div>
  </div>
);

const mapStateToProps = ({cart: {cartItems}})  => ({
    cartItems
});

export default connect(mapStateToProps)(CheckoutPage);