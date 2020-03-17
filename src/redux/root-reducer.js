import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import loaderReducer from './loader/loader.reducer';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart'] // only cart will be persisted
};

const rootReducer = combineReducers({
    'user': userReducer,
    'cart': cartReducer,
    'loader': loaderReducer
});

export default persistReducer(persistConfig, rootReducer);
