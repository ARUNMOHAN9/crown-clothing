import { CartTypes } from './cart.types';
import { addCartItem, removeCartItem } from './cart.utils';

const INITIAL_STATE = {
    hideCartDropdown: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartTypes.TOGGLE_CART_DROPDOWN:
            return { ...state, hideCartDropdown: !state.hideCartDropdown }

        case CartTypes.ADD_ITEM_TO_CART:
            return addCartItem(state, action.payload)

        case CartTypes.REMOVE_ITEM_FROM_CART:
            return removeCartItem(state, action.payload)

        default: return state;
    }
}

export default cartReducer;