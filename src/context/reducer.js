export const actionType = {
    SET_USER: 'SET_USER'
}

const initialState = {
    user: null,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.SET_USER:
            return {
                ...state, user: action.user
            }
        default:
            return state
    }
}

export default reducer;