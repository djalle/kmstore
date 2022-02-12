import { UserActionTypes } from './user.types.js';

const INITIAL_STATE = {
    userAktif: null
}

const userReducer = (stateSebelumnya = INITIAL_STATE, aksi) => {
    switch (aksi.type) {
        case UserActionTypes.SET_CURRRENT_USER:
            return {
                ...stateSebelumnya,
                userAktif: aksi.payload
            }
        default:
            return stateSebelumnya
    }
};

export default userReducer;