import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";


class ShopPage extends React.Component {
    
    constructor(properti) {
        super(properti);

        this.state = {
            koleksiJualan: SHOP_DATA
        }
        
    }

    render() {

        const {koleksiJualan} = this.state;

        return (<div className="shop-page">
            {
                koleksiJualan.map(({id, ...propertiLainnya}) => (
                    <CollectionPreview key={id} {...propertiLainnya}/>
                ))
            }
        </div>)

    }


};

export default ShopPage;