import { handleActions } from 'redux-actions';
import { authActions } from '../_actions/auth';

const initialState = {
    login: null,
    loading: false
}

export const user =  handleActions(
    new Map([
        [
            authActions.login.request,
            () => ({
                loading: true
            })
        ],
        [
            authActions.login.success,
            (state, action) => ({
                username: action.payload.username,
                loading: false
            })
        ],
        [
            authActions.login.error,
            (state, action) => ({
                username: null,
                loading: false
            })
        ]
    ]),
    initialState
)