import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import { tambahBarang } from "../../redux/cart/cart.actions";
import './collection-item.stayles.scss';

const CollectionItem = ( {item, masukinBarang} ) => {
    
    const { name, price, imageUrl} = item;


    return (
    <div className="collection-item">
        <div 
            className="image"
            style={{ 
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <CustomButton onClick={() => masukinBarang(item)} inverted> SIKATT! </CustomButton>
        
    </div>
)};

const mapDispatchToProps = dispatch => ({
    masukinBarang: barang => dispatch(tambahBarang(barang))
});

export default connect(null, mapDispatchToProps)(CollectionItem)
