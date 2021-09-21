import React from 'react';
import { Text } from 'react-native';

import withReduxProvider from '../store/withReduxProvider';

const Films = () => {
    return <Text>Films</Text>;
};

export default withReduxProvider(Films);
