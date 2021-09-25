import React, { FC } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

export type PressableProps = TouchableOpacityProps;

const Pressable: FC<PressableProps> = props => {
    return <TouchableOpacity {...props} />;
};

export default Pressable;
