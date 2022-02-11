const INITIAL_STATE = {
    userAktif: null
}

const userReducer = (stateSekarang = INITIAL_STATE, aksi) => {
    switch (aksi.type) {
        case'SET_CURRRENT_USER':
            return {
                ...stateSekarang,
                userAktif: aksi.payload
            }
        default:
            return stateSekarang
    }
};

export default userReducer;