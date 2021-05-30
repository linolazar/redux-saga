import Axios from "./axios";

class GoogleAPI extends Axios {

    public getLatitude = (placeName: string): string => {
        // return this.get(`https://maps.googleapis.com/maps/api/geocode/json?
        // address=${placeName}&key=${`YOUR_API_KEY`}`); //api key has to be inserted from google project.

        return "thrissur"
    }
}

export default new GoogleAPI();