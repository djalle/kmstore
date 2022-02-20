import React from "react";
import { Route } from 'react-router-dom';
import { connect } from "react-redux";
import { firestore, convertSnapshopKoleksiKeMap } from '../../firebase/firebase.utils.js';
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.components.jsx";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

// import SHOP_DATA from "./shop.data";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount(){

        const {updateCollections} = this.props;
        
        const referensiKoleksi = firestore.collection('collections');

        // =================================== Promise pake Firebase ===================================


        // this.unsubscribeFromSnapshot = referensiKoleksi.onSnapshot(async snapshot => {
        //     const collectionsMap = convertSnapshopKoleksiKeMap(snapshot);
        //     updateCollections(collectionsMap);
        //     this.setState({loading: false})
        // });
    

        //  ==================================== Promise ga pake Firebase =====================================

        referensiKoleksi.get().then(snapshot => {
            const collectionsMap = convertSnapshopKoleksiKeMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading: false})
        });

        //  ============================ Pake Fetch API biasa dan ambil url dari firebase ========================

        // fetch('https://firestore.googleapis.com/v1/projects/k-store-c91b4/databases/(default)/documents/collections')
        // .then(responBalik => responBalik.json())
        // .then(hasilGetCollectionnya => console.log(hasilGetCollectionnya));

        
    };



    render() {
        
        const { match } = this.props;
        const { loading } = this.state;

        return (
            <div className="shop-page">
                <Route 
                    exact 
                    path={`${match.path}`} 
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} /> }
                    // component={CollectionsOverview} 
                />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} /> }
                    // component={CollectionPage} 
                />
            </div>        
        )

    }

};

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);