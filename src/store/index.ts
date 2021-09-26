import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import { ghibliApi } from './api';
import favoriteFilmsSlice from './slices/favoriteFilmsSlice';

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    whitelist: ['favoriteFilms'],
};

const rootReducer = combineReducers({
    [ghibliApi.reducerPath]: ghibliApi.reducer,
    [favoriteFilmsSlice.name]: favoriteFilmsSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [ghibliApi.middleware];

if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
}

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(middlewares),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
