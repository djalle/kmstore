import React from "react";
import { connect } from "react-redux";
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from "../../redux/shop/shop.selector";
import './collection.styles.scss';

const CollectionPage = ( {koleksi} ) => {
    const { title, items } = koleksi;
    return (
        <div className="collection-page">
            <h2 className="title"> {title} </h2>
            <div className='items'>
                {
                    items.map(barang => <CollectionItem key={barang.id} item={barang} />)
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state, propertiDiSini) => ({
    koleksi: selectCollection(propertiDiSini.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
