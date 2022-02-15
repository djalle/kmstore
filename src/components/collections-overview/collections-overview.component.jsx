import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { pilihKoleksiBuatPreview } from "../../redux/shop/shop.selector";
import './collections-overview.styles.scss';

const CollectionsOverview = ( { koleksiJualan } ) => (
    <div className='collections-overview'>
        {
            koleksiJualan.map(({id, ...propertiLainnya}) => (
                <CollectionPreview key={id} {...propertiLainnya}/>
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    koleksiJualan: pilihKoleksiBuatPreview
})


export default connect(mapStateToProps)(CollectionsOverview);