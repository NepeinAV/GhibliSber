import React, { ComponentType } from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '.';

const withReduxProvider = <ComponentProps,>(Component: ComponentType<ComponentProps>) => {
    const Wrapper = (props: ComponentProps) => {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Component {...props} />
                </PersistGate>
            </Provider>
        );
    };

    return Wrapper;
};

export default withReduxProvider;
