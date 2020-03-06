import {CartTypes} from './cart.types';

const INITIAL_STATE = {
    hideCartDropdown: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartTypes.TOGGLE_CART_DROPDOWN:
            return {...state, hideCartDropdown: !state.hideCartDropdown}
    
        default: return state;
    }
}

export default cartReducer;