import { UserActionTypes } from './user.types.js';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRRENT_USER,
    payload: user
});