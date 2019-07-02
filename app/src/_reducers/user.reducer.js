const initialState = {
    login: null
}

export const user = (state = initialState, action) => {
    console.log('%c⧭', 'color: #f2ceb6', 'user.reducer.js', action);
    return state;
}