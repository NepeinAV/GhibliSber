import React, { createContext, FC, useCallback, useState } from 'react';
import { Text } from 'react-native';
import BottomSheetBehavior from 'reanimated-bottom-sheet';

import { css } from 'styled-components/native';
import { Film } from '../../services/films';
import BottomSheet from '../../ui/bottom-sheet/BottomSheet';
import Box from '../../ui/Box';

type FilmBottomSheetContext = {
    openBottomSheet: (film: Film) => void;
    closeBottomSheet: () => void;
};

export const FilmBottomSheetContext = createContext<FilmBottomSheetContext>({
    openBottomSheet: () => {},
    closeBottomSheet: () => {},
});

const snapPoints = [450, 0];

const FilmBottomSheet: FC = ({ children }) => {
    const [selectedFilm, setFilm] = useState<Film | null>(null);
    const sheetRef = React.useRef<BottomSheetBehavior>(null);

    const openBottomSheet = useCallback((film: Film) => {
        setFilm(film);

        sheetRef.current?.snapTo(0);
    }, []);

    const closeBottomSheet = useCallback(() => sheetRef.current?.snapTo(1), []);

    return (
        <>
            <FilmBottomSheetContext.Provider value={{ openBottomSheet, closeBottomSheet }}>
                {children}
            </FilmBottomSheetContext.Provider>

            <BottomSheet ref={sheetRef} snapPoints={snapPoints} initialSnap={1} borderRadius={10}>
                <Box
                    css={css`
                        background-color: white;
                        padding: 16px;
                        height: 450px;
                    `}
                >
                    <Text>{selectedFilm?.title}</Text>
                </Box>
            </BottomSheet>
        </>
    );
};

export default FilmBottomSheet;
