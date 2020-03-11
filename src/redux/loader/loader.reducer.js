import {LoaderTypes} from './loader.types';

const INITIAL_STATE = {
    isLoading: false
}

let loaderCount = 0;

const loaderReducer = (state = INITIAL_STATE, action) => {
    let isLoading = false;
    switch (action.type) {
        case LoaderTypes.TOGGLE_LOADER:
            if (action.payload === true) {
                ++loaderCount;
                isLoading = true;
            } else if (action.payload === false) {
                --loaderCount;
                if (loaderCount === 0) {
                    isLoading = false;
                }
            };
            return {...state, isLoading};
    
        default:
            return state;
    }
}

export default loaderReducer;