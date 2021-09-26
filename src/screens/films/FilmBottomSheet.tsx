import React, { createContext, FC, useCallback, useMemo, useState } from 'react';
import BottomSheetBehavior from 'reanimated-bottom-sheet';

import { css } from 'styled-components/native';

import { Film } from '../../services/films';
import BottomSheet from '../../ui/bottom-sheet/BottomSheet';
import Box from '../../ui/Box';
import FilmLayout from './FilmLayout';

type FilmBottomSheetContext = {
    openBottomSheet: (film: Film) => void;
    closeBottomSheet: () => void;
};

export const FilmBottomSheetContext = createContext<FilmBottomSheetContext>({
    openBottomSheet: () => {},
    closeBottomSheet: () => {},
});

const BOTTOM_SHEET_HEIGHT = '60%';

const snapPoints = [BOTTOM_SHEET_HEIGHT, 0];

const FilmBottomSheet: FC = ({ children }) => {
    const [isTextExpanded, setTextExpanded] = useState(false);
    const [selectedFilm, setFilm] = useState<Film | null>(null);

    const sheetRef = React.useRef<BottomSheetBehavior>(null);

    const openBottomSheet = useCallback((film: Film) => {
        setFilm(film);

        sheetRef.current?.snapTo(0);
    }, []);

    const closeBottomSheet = useCallback(() => {
        sheetRef.current?.snapTo(1);
    }, []);

    const contextValue = useMemo(() => ({ openBottomSheet, closeBottomSheet }), [closeBottomSheet, openBottomSheet]);

    return (
        <>
            <FilmBottomSheetContext.Provider value={contextValue}>{children}</FilmBottomSheetContext.Provider>

            {selectedFilm !== null && (
                <BottomSheet
                    ref={sheetRef}
                    snapPoints={snapPoints}
                    initialSnap={1}
                    borderRadius={10}
                    onCloseEnd={() => setTextExpanded(false)}
                >
                    <Box
                        css={css`
                            background-color: white;
                            padding: 16px;
                            height: 100%;
                        `}
                    >
                        <FilmLayout
                            isFullView={true}
                            film={selectedFilm}
                            isTextExpanded={isTextExpanded}
                            setTextExpanded={setTextExpanded}
                        />
                    </Box>
                </BottomSheet>
            )}
        </>
    );
};

export default FilmBottomSheet;
