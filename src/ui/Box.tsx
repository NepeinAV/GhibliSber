import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';

export type BoxProps = ViewProps;

const Box: FC<BoxProps> = props => {
    return <View {...props} />;
};

export default Box;
