// import SHOP_DATA from "./shop.data";
import ShopActionTypes from "./shop.types";


const INITIAL_STATE = {
    // koleksiJualan: SHOP_DATA
    koleksiJualan: null
};

const shopReducer = ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS: 
        return {
            ...state,
            koleksiJualan: action.payload
        };
        default:
            return state
    }
};

export default shopReducer;