import { call } from "@redux-saga/core/effects";
import { put } from "redux-saga/effects";
import { FetchLatitudeRequestAction, fetchLatitudeSuccess } from "../actions/actions";
import GoogleApis from "../api/googleapi";

export function* fetchLatitudeDetails(action: FetchLatitudeRequestAction) {

    // call makes an api call
    const latitude: string = yield call(GoogleApis.getLatitude, action.payload)
    // put will trigger an action and update in store through reducer.
    yield put(fetchLatitudeSuccess(latitude))
}
