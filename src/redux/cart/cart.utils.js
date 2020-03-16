export const addCartItem = (state, payload) => {
    const {cartItems} = JSON.parse(JSON.stringify(state));
    const categoryIndex = cartItems.findIndex(category => category.id === payload.id);
    if (categoryIndex === -1) {
        payload.item.quantity = 1;
        const obj = {id: payload.id, item: [payload.item]}
        cartItems.push(obj);
    } else {
        const itemIndex = cartItems[categoryIndex].item.findIndex(item => item.id === payload.item.id);
        if(itemIndex === -1) {
            payload.item.quantity = 1;
            cartItems[categoryIndex].item.push(payload.item);
        } else {
            cartItems[categoryIndex].item[itemIndex].quantity++;
        }
    }

    return {...state, cartItems};
}

export const removeCartItem = (state, payload) => {
    const {cartItems} = JSON.parse(JSON.stringify(state));
    const categoryIndex = cartItems.findIndex(category => category.id === payload.id);
    if (categoryIndex === -1) {
        return state;
    } else {
        const itemIndex = cartItems[categoryIndex].item.findIndex(item => item.id === payload.item.id);
        if(itemIndex === -1) {
            return state;
        } else {
            if (cartItems[categoryIndex].item[itemIndex].quantity > 1) {
                cartItems[categoryIndex].item[itemIndex].quantity--;
            } else {
                cartItems.splice(categoryIndex, 1);
            }
        }
    }

    return {...state, cartItems};
}