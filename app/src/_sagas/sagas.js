import userServices from '../_services/user.services';
import { call, put, takeEvery } from 'redux-saga/effects'
import { loginRequest, loginSuccess, loginError } from '../_actions/auth';

export function* login(credentials) {
    try {
        const user = yield call(userServices.login, credentials);
        yield put( loginSuccess(user) )
    } catch (error) {
        yield put( loginError(error) )
    }
}

function* watchLoginRequests(){
    yield takeEvery('LOGIN_REQUEST', login);
}