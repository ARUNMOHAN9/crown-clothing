import {CartTypes} from './cart.types';

export const toggleCartDropdown = () => ({
    type: CartTypes.TOGGLE_CART_DROPDOWN
});

export const addItemToCart = (category) => ({
    type: CartTypes.ADD_ITEM_TO_CART,
    payload: category
});

export const removeItemFromCart = (category) => ({
    type: CartTypes.REMOVE_ITEM_FROM_CART,
    payload: category
});