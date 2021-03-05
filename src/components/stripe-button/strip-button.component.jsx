import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Logo from '../../assets/logo-ft.png';

const StripeCheckoutButton = ({ price }) => {
    // const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51I9ODDJzTikM3Z7oa7KqxS1UB8eD9wPi2IKcS4JUIsLVBGFrBYTetc4xqRa6MsowTjpwTrIcqTHJrstSp4k00uME00o7xxTMuq';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    const fotmatter =  new Intl.NumberFormat('vn', { style: 'currency', currency: 'vnd' });
    return (
        <StripeCheckout
            label="Thanh Toán"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image={Logo}
            description={`Your total is $${fotmatter.format(price)}`}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishablekey}
        />
    );
}

export default StripeCheckoutButton;