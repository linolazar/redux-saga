import { createSelector } from "reselect";
import { FETCH_LATITUDE_SUCCESS, LOAD_JSON_DATA_REQUEST } from "../actions/actions";
import { Hotel } from "../types/type";

export interface HotelState {
    latitude: string;
    hotelData: any;  // update and use type Hotel;
}
const initialState: HotelState = {
    latitude: "",
    hotelData: null
};

const HotelReducer = (state: HotelState = initialState, action: any) => {
    switch (action.type) {
        case FETCH_LATITUDE_SUCCESS: {
            const latitude = action.payload;
            return { ...state, latitude };
        }
        case LOAD_JSON_DATA_REQUEST: {
            const hotelData = action.payload;
            return { ...state, hotelData };
        }
        default:
            return state;
    }
};

export default HotelReducer;


export const getSearchLatitude = (state: HotelState) => state.latitude;

export const getHotelData = (state: HotelState) => state.hotelData;


export const hotelList = createSelector(
    [
        getSearchLatitude,
        getHotelData,
    ],
    (
        searchLatitude: any,
        hotelData: any
    ) => {
        if (searchLatitude === null) {
            return null;
        }
        console.log(searchLatitude)
        console.log(hotelData)
        // Our Logic for finding hotel data fron json.

        const dataList = 'List of hotels to display after latitude filtering'
        return { hotelList: dataList };
    }
);

