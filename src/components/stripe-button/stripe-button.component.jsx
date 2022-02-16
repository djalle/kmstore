import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    
    const hargaUntukStripe = price * 100;
    const apiKeyDariWebStripe = 'pk_test_51KTfAnK1YaqiMcXRNvVRSe2rGGgtxCSRmWikYLKU0T5vpg6ZRHS9Ujg1Y29NuW5vvoXxHO2ZJhT9pH082rL5g8yd000RCtSgYR';

    const onToken = token => {
        console.log(token);
        alert ('Payment Successful! Wohoooo!')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='KM-Store GmbH.'
            billingAddress
            shippingAddress
            image='%PUBLIC_URL%/favicon.ico'
            description={`Your total is IDR ${price}`}
            amount={hargaUntukStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={apiKeyDariWebStripe}
        />
    )
};

export default StripeCheckoutButton;