import { takeLatest, call, all, put } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';
import {convertCollectionSnapshotToMap, firestore} from "../../firebase/firebase.utils";
import {fetchCollectionsFailure, fetchCollectionsSuccess} from "./shop.action";

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot); // Call is the effect inside of our generators functions that invokes the method
        yield put(fetchCollectionsSuccess(collectionsMap)) // Saga Effect for creating actions
    } catch (e) {
        yield put(fetchCollectionsFailure(e.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}