import React, { forwardRef, PropsWithChildren, useRef, useState } from 'react';
import Animated from 'react-native-reanimated';

import BottomSheetBase from 'reanimated-bottom-sheet';

import Backdrop from './Backdrop';

type BottomSheetProps = PropsWithChildren<{
    snapPoints: (string | number)[];
    initialSnap?: number;
    borderRadius?: number;
    onOpenStart?: () => void;
    onCloseEnd?: () => void;
}>;

const BottomSheet = forwardRef<BottomSheetBase, BottomSheetProps>(
    ({ children, onCloseEnd, onOpenStart, ...other }, ref) => {
        const [isSheetOpen, setSheetOpenStatus] = useState(false);

        const bottomSheetAnimatedNode = useRef(new Animated.Value(1)).current;

        const renderContent = () => children;

        return (
            <>
                <Backdrop bottomSheetAnimatedNode={bottomSheetAnimatedNode} isSheetOpen={isSheetOpen} />

                <BottomSheetBase
                    ref={ref}
                    callbackNode={bottomSheetAnimatedNode}
                    {...other}
                    renderContent={renderContent}
                    onOpenStart={() => {
                        setSheetOpenStatus(true);

                        onOpenStart && onOpenStart();
                    }}
                    onCloseEnd={() => {
                        setSheetOpenStatus(false);

                        onCloseEnd && onCloseEnd();
                    }}
                />
            </>
        );
    },
);

export default BottomSheet;
