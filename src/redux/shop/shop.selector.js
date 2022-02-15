import { createSelector } from 'reselect';

// const ID_KOLEKSI = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// };

const pilihToko = state => state.toko;

export const pilihKoleksiJualan = createSelector (
    [pilihToko],
    belanja => belanja.koleksiJualan
);

export const pilihKoleksiBuatPreview = createSelector(
    [selectCollection],
    daftarKoleksi => Object.keys(daftarKoleksi).map(keyObjek => daftarKoleksi[keyObjek] )
);

export const selectCollection = urlParameter => createSelector(
    [pilihKoleksiJualan],
    // koleksi => koleksi.find(
    //     koleksiBarang => koleksiBarang.id === ID_KOLEKSI[urlParameter]
    // )
    koleksi => koleksi[urlParameter]
);