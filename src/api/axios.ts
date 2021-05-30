import axios from "axios";

class Axios {

    protected get(url: string): any {
        return axios.get(url)
            .then((response: any) => response)
            .catch((error: any) => {
                console.log(error)
            });
    }

}

export default Axios;