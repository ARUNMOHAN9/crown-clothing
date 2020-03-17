import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import StripedCheckout from 'react-stripe-checkout';
import {clearCart} from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({price, clearCart, history}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_mHAVxe0nbcv3gI33LJw9KeZ400CwRKkU1G';

    const onToken = (token) => {
        console.log(token);
        alert('payment success');
        clearCart();
        history.push('/');
    }

    return(<StripedCheckout
        label='Pay Now'
        name='Crwn Cloths'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
    />
    );

}

const mapDispatchToProps = (dispatch) => ({
    clearCart : () => dispatch(clearCart())
});

export default withRouter(connect(null, mapDispatchToProps)(StripeCheckoutButton));