import {configureStore} from '@reduxjs/toolkit';
import xbasketReducer from './xbasket/xbasketSlice'
import productsReducer from './products/productsSlice'

export default configureStore({
    reducer: {
        products:productsReducer,
        xbasket:xbasketReducer
    }
});