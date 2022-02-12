import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.BUKA_TUTUP_CART
});

export const tambahBarang = barang => ({
    type: CartActionTypes.TAMBAH_BARANG, 
    payload: barang
});

