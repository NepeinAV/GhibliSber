import React from 'react';

import { ThemeProvider } from 'styled-components';
import Card from '../components/Card';

import withReduxProvider from '../store/withReduxProvider';
import { theme } from '../theme';

const Films = () => {
    return (
        <ThemeProvider theme={theme}>
            <Card />
        </ThemeProvider>
    );
};

export default withReduxProvider(Films);
