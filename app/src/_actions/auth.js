import { createActions } from 'redux-actions';
import userServices from '../_services/user.services';
import { history } from '../_helpers/history';

export const authActions = createActions({
    LOGIN: {
        REQUEST: () => ({}),
        SUCCESS: username => ({ username }),
        ERROR: error => ({ error })
    }
})

const storeToken = token => {
    localStorage.setItem('proceeed_token', token);
}

export const getToken = () => {
    return localStorage.getItem('proceeed_token');
}

export const login = (credentials) => { 
    return dispatch => {
        dispatch( authActions.login.request() );

        return userServices.login(credentials)
            .then(response => {
                storeToken(response.token);
                history.push('/a');
                dispatch( authActions.login.success( credentials.username ) );
            })
            .catch(error => {
                dispatch( authActions.login.error(error) );
            });
    }
}