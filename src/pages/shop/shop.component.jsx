import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import CollectionOverview from "../../components/collections-overview/collections-overview.component"
import CollectionPage from "../collection/collection.component";
import { firestore, convertCollectionSnapshotToMap} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.action";


class ShopPage extends React.Component {

    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionMap =  convertCollectionSnapshotToMap(snapshot);
            updateCollections(collectionMap)
        })
    }

    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverview}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})
export default connect(null, mapDispatchToProps)(ShopPage);