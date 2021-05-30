import { all, takeEvery } from 'redux-saga/effects'
import { FETCH_LATITUDE_REQUEST } from '../actions/actions'
import { fetchLatitudeDetails } from '../models/model'



export default function* rootSaga(): Generator {
    /*  takeevery is a watcher method from redux-saga.
        whenever an action of FETCH_LATITUDE_REQUEST fired, 
        then takeevery catches that action and redirects to the method 'fetchLatitudeDetails)
    */
    yield all([
        takeEvery(FETCH_LATITUDE_REQUEST, fetchLatitudeDetails)
    ])
};