import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, hargaTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component"
import './checkout.styles.scss';

const CheckoutPage = ( { barangBelanjaan, total } ) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>

        {
            barangBelanjaan.map(barang => 
                <CheckoutItem key={barang.id} belanjaanGua={barang} />
            )
        }

        <div className="total">
            <span>TOTAL: IDR {total}</span>
        </div>

        <div className="test-warning">
            *You are using this card for payment you are about to commit
            <br />
            4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
        </div>


        <StripeCheckoutButton price={total} />

    </div>
);

const mapStateToPropos = createStructuredSelector ({
    barangBelanjaan: selectCartItems,
    total: hargaTotal
})

export default connect(mapStateToPropos)(CheckoutPage);

