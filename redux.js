import { configureStore } from '@reduxjs/toolkit';
import slice from './slice';

const store = configureStore({
    reducer: {
        reducerNumber: slice
    }
});

export default store;
