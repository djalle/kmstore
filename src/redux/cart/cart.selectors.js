import { createSelector } from 'reselect';

const selectCart = stateUtama => stateUtama.cart; // ini input selector. stateUtama itu 'state'

export const selectCartItems = createSelector( // createSelector ngebuat hasil function ini jadi memoize 
    [selectCart],
    cart => cart.barangBelanjaan // 'cart' disini adalah 'return' dari argumen pertama (array selectCart)
);

export const selectHiddenDropCart = createSelector (
    [selectCart],
    cart => cart.hidden
);

export const selecCartItemsCount = createSelector(
    [selectCartItems],
    barangBelanjaan => barangBelanjaan.reduce((jumlah, belanjaan) => {
        return jumlah + belanjaan.qty
    }, 0)
);

export const hargaTotal = createSelector(
    [selectCartItems],
    barangBelanjaan => barangBelanjaan.reduce((jumlah, belanjaan) => // kita bisa hilangin {} dan 'return'
        jumlah + belanjaan.qty * belanjaan.price
    , 0)
)

