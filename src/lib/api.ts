import { handleResponse } from "Lib/handleResponse";
import { standardHeadersWithAuth } from "Lib/standardHeaders";

class API {
    constructor(){

    }

    Get(path: string): Promise<any> {
        return fetch(path, {
            method: "GET",
            headers: standardHeadersWithAuth()
        })
            .then(handleResponse)
            .then(jsondata => {
                return Promise.resolve({ success: true, data: jsondata });
            })
            .catch(error => {
                return Promise.reject({ success: false, error: error });
            })
            .finally(() => {
            });
    };
}

export default API;
