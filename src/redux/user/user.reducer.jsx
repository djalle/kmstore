import { UserActionTypes } from './user.types.js';

const INITIAL_STATE = {
    userAktif: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRRENT_USER:
            return {
                ...state,
                userAktif: action.payload
            }
        default:
            return state
    }
};

export default userReducer;