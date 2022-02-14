import React from "react";
import { connect } from "react-redux";
import { hapusBarang, tambahBarang, kurangiBarang } from "../../redux/cart/cart.actions";
import './checkout-item.styles.scss';

const CheckoutItem = ( { belanjaanGua, barangTersingkir, tambahBarang, kurangiBarang } ) => {
    const { name, imageUrl, price, qty } = belanjaanGua
    return(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />            
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div 
                className="arrow" 
                onClick={ () => kurangiBarang(belanjaanGua) }
            > &#10094; </div>
            <span className="value">{qty}</span>
            <div 
                className="arrow"
                onClick={ () => tambahBarang(belanjaanGua) }
            > &#10095; </div>
        </span>
        <span className="price">{price}</span>
        <div 
            className="remove-button"
            onClick={() => barangTersingkir(belanjaanGua)}
        >&#10005;</div>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    barangTersingkir: barang => dispatch(hapusBarang(barang)),
    tambahBarang: barang => dispatch(tambahBarang(barang)),
    kurangiBarang: barang => dispatch(kurangiBarang(barang))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);