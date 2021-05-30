import { ActionWithPayload } from "../types/type";
import hotelData from '../hoteldata.json'

//Action type
export const FETCH_LATITUDE_REQUEST = "FETCH_LATITUDE_REQUEST";
export const FETCH_LATITUDE_SUCCESS = "FETCH_LATITUDE_SUCCESS";
export const LOAD_JSON_DATA_REQUEST = "LOAD_JSON_DATA_REQUEST";

// Action
export type FetchLatitudeRequestAction = ActionWithPayload<typeof FETCH_LATITUDE_REQUEST, string>;
export type FetchLatitudeSuccessAction = ActionWithPayload<typeof FETCH_LATITUDE_SUCCESS, string>;
export type LoadJsonDataAction = ActionWithPayload<typeof LOAD_JSON_DATA_REQUEST, any>;

export const fetchLatitudeRequest = (placeName: string): FetchLatitudeRequestAction => ({
    type: FETCH_LATITUDE_REQUEST,
    payload: placeName
});

export const fetchLatitudeSuccess = (latitude: string): FetchLatitudeSuccessAction => ({
    type: "FETCH_LATITUDE_SUCCESS",
    payload: latitude
});

export const loadJsonDataRequest = (): LoadJsonDataAction => ({
    type: "LOAD_JSON_DATA_REQUEST",
    payload: hotelData
});