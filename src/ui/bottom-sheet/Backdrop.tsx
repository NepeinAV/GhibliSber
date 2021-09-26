import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import Animated from 'react-native-reanimated';

type BackdropProps = {
    bottomSheetAnimatedNode: Animated.Value<number>;
    isSheetOpen: boolean;
};

const styles = StyleSheet.create({
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
});

const Backdrop: FC<BackdropProps> = ({ bottomSheetAnimatedNode, isSheetOpen }) => {
    return (
        <Animated.View
            pointerEvents={isSheetOpen ? 'auto' : 'none'}
            style={[
                {
                    opacity: Animated.interpolate(bottomSheetAnimatedNode, {
                        inputRange: [0, 1],
                        outputRange: [1, 0],
                    }),
                },
                styles.backdrop,
            ]}
        />
    );
};

export default Backdrop;
