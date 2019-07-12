import { createActions } from 'redux-actions';

export const pageActions = createActions({
    INFO: {
        SET_TITLE: title => ({ title })
    }
})