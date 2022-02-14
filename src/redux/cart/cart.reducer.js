import CartActionTypes from './cart.types';
import { tambahBarangKeKeranjang, kurangiBarangDariKeranjang } from './cart.utils';

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
            };
        
        case CartActionTypes.KURANGI_SINGKIRKAN_BARANG:
            return {
                ...state,
                barangBelanjaan: kurangiBarangDariKeranjang(state.barangBelanjaan, action.payload)
            };

        case CartActionTypes.HAPUS_BARANG:
            return {
                ...state,
                barangBelanjaan: state.barangBelanjaan.filter(barang => barang.id !== action.payload.id)
            }
        
            default:
            return state;
    }
}

export default cartReducer;