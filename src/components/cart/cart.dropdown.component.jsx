import React from "react";
import { connect } from "react-redux";
import CustomButton from '../custom-button/custom-button.component';
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import './cart.dropdown.styles.scss';

const CartDropdown = ( {barangBelanjaan} ) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                barangBelanjaan.map(barang => (
                    <CartItem key={barang.id} item={barang} />
                ))
            }
        </div>
        <CustomButton>CUSS BELI</CustomButton>
    </div>
);

const mapStateToProps= (state) => ({
    barangBelanjaan: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);