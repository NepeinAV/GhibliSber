import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import Animated from 'react-native-reanimated';

type BackdropProps = {
    bottomSheetAnimatedNode: Animated.Value<number>;
    isSheetOpen: boolean;
};

const Backdrop: FC<BackdropProps> = ({ bottomSheetAnimatedNode, isSheetOpen }) => {
    return (
        <Animated.View
            pointerEvents={isSheetOpen ? 'auto' : 'none'}
            style={[
                {
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    opacity: Animated.interpolate(bottomSheetAnimatedNode, {
                        inputRange: [0, 1],
                        outputRange: [1, 0],
                    }),
                },
                StyleSheet.absoluteFillObject,
            ]}
        />
    );
};

export default Backdrop;
