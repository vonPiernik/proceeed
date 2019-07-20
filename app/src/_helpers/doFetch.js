import response from "../_helpers/response";
import { API_URL } from "./api";

export const doFetch = ({path, data, method = 'GET'}) => {
    let token = localStorage.getItem('proceeed_token');

    return fetch(`${API_URL}${path}`, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify( data )
    })
    .then(response.handle, response.handleError)
    .then(response => {
        return response;
    })
    .catch(error => { 
        throw error
    })
}