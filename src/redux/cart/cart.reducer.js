import { CartTypes } from './cart.types';
import { addCartItem, removeCartItem, deleteCartItem } from './cart.utils';

const INITIAL_STATE = {
    hideCartDropdown: true,
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartTypes.TOGGLE_CART_DROPDOWN:
            return { ...state, hideCartDropdown: !state.hideCartDropdown }

        case CartTypes.ADD_ITEM_TO_CART:
            return addCartItem(state, action.payload)

        case CartTypes.REMOVE_ITEM_FROM_CART:
            return removeCartItem(state, action.payload)

        case CartTypes.DELETE_ITEM_FROM_CART:
            return deleteCartItem(state, action.payload)
        
        case CartTypes.CLEAR_CART:
            let {cartItems, totalQuantity, totalPrice} = state;
            cartItems = [];
            totalQuantity = 0;
            totalPrice = 0;
            return {...state, cartItems, totalPrice, totalQuantity};

        default: return state;
    }
}

export default cartReducer;