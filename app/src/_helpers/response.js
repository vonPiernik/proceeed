const handle = (response) => {
    return new Promise((resolve, reject) => {
        if (response.ok) {
            // return json if it was returned in the response
            var contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                response.json().then(json => resolve(json));
            } else {
                resolve();
            }
        } else {
            // return error message from response body
            response.json().then(json => reject(json));
            // reject(response);
        }
    });
}

const handleError = (error) => {
    return Promise.reject(error);
}

const response = {
    handle,
    handleError
}
export default response;