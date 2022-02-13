import { createSelector } from 'reselect';

const selectCart = state => state.cart; // ini input selector

export const selectCartItems = createSelector( // createSelector ngebuat hasil function ini jadi memoize 
    [selectCart],
    cart => cart.barangBelanjaan
);

export const selecCartItemsCount = createSelector(
    [selectCartItems],
    barangBelanjaan => barangBelanjaan.reduce((jumlah, belanjaan) => {
        return jumlah + belanjaan.qty
    }, 0)
)

