import { handleActions } from 'redux-actions';
import { pageActions } from '../_actions/page';

const initialState = {
    title: null
}

export const page =  handleActions(
    new Map([
        [
            pageActions.info.setTitle,
            (state, action) => ({
                title: action.payload.title
            })
        ]
    ]),
    initialState
)