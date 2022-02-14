import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.BUKA_TUTUP_CART
});

export const tambahBarang = barang => ({
    type: CartActionTypes.TAMBAH_BARANG, 
    payload: barang
});

export const kurangiBarang = barang => ({
    type: CartActionTypes.KURANGI_SINGKIRKAN_BARANG, 
    payload: barang
});

export const hapusBarang = barang => ({
    type: CartActionTypes.HAPUS_BARANG,
    payload: barang
});

