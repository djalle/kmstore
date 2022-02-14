import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import CustomButton from '../custom-button/custom-button.component';
import CartItem from "../cart-item/cart-item.component";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import './cart.dropdown.styles.scss';

const CartDropdown = ( {barangBelanjaan, history, dispatch} ) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                barangBelanjaan.length ? 
                (
                    barangBelanjaan.map(barang => (
                    <CartItem key={barang.id} item={barang} />))
                ) : (
                    <span className="empty-message"> Start filling your cart! </span>
                )
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}>
            CUSS BELI
        </CustomButton>
    </div>
);

const mapStateToProps= createStructuredSelector({
    barangBelanjaan: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));