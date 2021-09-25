import React, { ComponentType } from 'react';

import { ThemeProvider } from 'styled-components/native';

import { theme } from '.';

const withThemeProvider = <ComponentProps,>(Component: ComponentType<ComponentProps>) => {
    const Wrapper = (props: ComponentProps) => {
        return (
            <ThemeProvider theme={theme}>
                <Component {...props} />
            </ThemeProvider>
        );
    };

    return Wrapper;
};

export default withThemeProvider;
