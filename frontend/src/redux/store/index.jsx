// store.js
import { configureStore } from '@reduxjs/toolkit';

import Users from '../features/Users';




const store = configureStore({
    reducer:{
        users: Users,
    }
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
