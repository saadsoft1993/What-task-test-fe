import { configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import loginReducer from 'app/pages/Login/store/slice'
import videosReducer from 'app/pages/HomePage/store/slice'

const loginPersistConfig = {
    key: 'login',
    storage: storage
};

export const store = configureStore({
    reducer: {
        login: persistReducer(loginPersistConfig, loginReducer),
        videos: videosReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch