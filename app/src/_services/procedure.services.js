import { doFetch } from "../_helpers/doFetch";

const procedureServices = {
    create: function( data ) {
        let path    = 'procedures';
        let method  = 'POST';

        return doFetch({path, data, method});
    }
}

export default procedureServices;