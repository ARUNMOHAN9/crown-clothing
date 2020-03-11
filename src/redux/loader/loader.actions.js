import {LoaderTypes} from './loader.types';

export const toggleLoader = (flag) => ({
    type: LoaderTypes.TOGGLE_LOADER,
    payload: flag
});