import React from 'react';
import StripedCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_mHAVxe0nbcv3gI33LJw9KeZ400CwRKkU1G';

    const onToken = (token) => {
        console.log(token);
        alert('payment success');
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

export default StripeCheckoutButton;