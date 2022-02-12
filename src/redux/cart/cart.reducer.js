import CartActionTypes from './cart.types';
import { tambahBarangKeKeranjang } from './cart.utils';

const INTIAL_STATE = {
    hidden: true,
    barangBelanjaan: []
};

const cartReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.BUKA_TUTUP_CART:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.TAMBAH_BARANG:
            return {
                ...state,
                barangBelanjaan: tambahBarangKeKeranjang(state.barangBelanjaan, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;