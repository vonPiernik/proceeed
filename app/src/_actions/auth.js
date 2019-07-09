import { createActions } from 'redux-actions';
import userServices from '../_services/user.services';

export const { loginRequest, loginSuccess, loginError } = createActions({
    LOGIN_REQUEST: () => ({}),
    LOGIN_SUCCESS: token => ({ ...token }),
    LOGIN_ERROR: error => ({ ...error })
})

export const login = (credentials) => { 
    return dispatch => {
        dispatch( loginRequest() );

        return userServices.login(credentials)
            .then(user => {
                dispatch( loginSuccess( user ) );
            })
            .catch(error => {
                dispatch( loginError(error) );
            });
    }
}