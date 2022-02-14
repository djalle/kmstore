import { createSelector } from 'reselect';

const selectUser = stateUtama => stateUtama.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.userAktif
);