import { createActions } from 'redux-actions';
import procedureServices from '../_services/procedure.services';

export const procedureActions = createActions({
    CREATE: {
        REQUEST: () => ({}),
        SUCCESS: () => ({}),
        ERROR: error => ({ error })
    }
})

export const create = data => { 
    return dispatch => {
        dispatch( procedureActions.create.request() );

        return procedureServices.create(data)
            .then(response => {
                dispatch( procedureActions.create.success() );
            })
            .catch(error => {
                dispatch( procedureActions.create.error(error) );
            });
    }
}