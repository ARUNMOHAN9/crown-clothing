import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import loaderReducer from './loader/loader.reducer';

export default combineReducers({
    'user': userReducer,
    'cart': cartReducer,
    'loader': loaderReducer
});