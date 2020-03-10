import {CartTypes} from './cart.types';

const INITIAL_STATE = {
    hideCartDropdown: true,
    cartItems:[]
}

const addCartItem = (state, payload) => {
    const {cartItems} = state;
    const categoryIndex = cartItems.findIndex(category => category.id === payload.id);
    if (categoryIndex === -1) {
        payload.item.count = 1;
        const obj = {id: payload.id, item: [payload.item]}
        cartItems.push(obj);
    } else {
        const itemIndex = cartItems[categoryIndex].item.findIndex(item => item.id === payload.item.id);
        if(itemIndex === -1) {
            cartItems[categoryIndex].item.push(payload.item);
        } else {
            cartItems[categoryIndex].item[itemIndex].count++;
        }
    }

    return {...state, cartItems};
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartTypes.TOGGLE_CART_DROPDOWN:
            return {...state, hideCartDropdown: !state.hideCartDropdown}

        case CartTypes.ADD_ITEM_TO_CART:
            return addCartItem(state, action.payload)
    
        default: return state;
    }
}

export default cartReducer;