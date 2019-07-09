import { doFetch } from "../_helpers/doFetch";

const userServices = {
    login: function( credentials ) {
        let data    = credentials;
        let path    = 'user/login';
        let method  = 'POST';

        return doFetch({path, data, method});
    }
}

export default userServices;