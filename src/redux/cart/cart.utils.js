export const addCartItem = (state, payload) => {
    let {cartItems, totalQuantity, totalPrice} = JSON.parse(JSON.stringify(state));
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
    totalQuantity += 1;
    totalPrice += payload.item.price;

    return {...state, cartItems, totalPrice, totalQuantity};
}

export const removeCartItem = (state, payload) => {
    let {cartItems, totalQuantity, totalPrice} = JSON.parse(JSON.stringify(state));
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
            totalQuantity -= 1;
            totalPrice -= payload.item.price;
        }
    }

    return {...state, cartItems, totalPrice, totalQuantity};
}

export const deleteCartItem = (state, payload) => {
    let {cartItems, totalQuantity, totalPrice} = JSON.parse(JSON.stringify(state));
    const categoryIndex = cartItems.findIndex(category => category.id === payload.id);
    if (categoryIndex === -1) {
        return state;
    } else {
        const itemIndex = cartItems[categoryIndex].item.findIndex(item => item.id === payload.item.id);
        if(itemIndex === -1) {
            return state;
        } else {
            const itemQty = cartItems[categoryIndex].item[itemIndex].quantity
            const priceToDeduct = itemQty * payload.item.price;
            cartItems.splice(categoryIndex, 1);
            totalQuantity -= itemQty;
            totalPrice -= priceToDeduct;
        }
    }

    return {...state, cartItems, totalPrice, totalQuantity};
}