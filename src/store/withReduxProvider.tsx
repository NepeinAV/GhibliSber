import React, { ComponentType } from 'react';

import { Provider } from 'react-redux';

import { store } from '.';

const withReduxProvider = <ComponentProps,>(Component: ComponentType<ComponentProps>) => {
    const Wrapper = (props: ComponentProps) => {
        return (
            <Provider store={store}>
                <Component {...props} />
            </Provider>
        );
    };

    return Wrapper;
};

export default withReduxProvider;
