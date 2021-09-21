import React from 'react';
import { Text } from 'react-native';

import withReduxProvider from '../store/withReduxProvider';

const Favorites = () => {
    return <Text>Favorites</Text>;
};

export default withReduxProvider(Favorites);
