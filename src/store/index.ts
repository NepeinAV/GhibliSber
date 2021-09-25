import { configureStore } from '@reduxjs/toolkit';

import { ghibliApi } from './api';

const middlewares = [ghibliApi.middleware];

if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
}

export const store = configureStore({
    reducer: {
        [ghibliApi.reducerPath]: ghibliApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
