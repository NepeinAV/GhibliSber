import color from 'color';
import React, { createContext, FC, useCallback, useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import BottomSheetBehavior from 'reanimated-bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styled, { css, useTheme } from 'styled-components/native';
import { Film } from '../../services/films';
import BottomSheet from '../../ui/bottom-sheet/BottomSheet';
import Box from '../../ui/Box';
import ShowMoreText from '../../ui/ShowMoreText';
import Spacer from '../../ui/Spacer';
import Typography from '../../ui/Typography';
import Pressable from '../../ui/Pressable';
import Description from '../../ui/Description';

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

const FilmMetaTypography = styled(Typography)`
    color: ${props => color(props.theme.colors.text).lighten(4).hex()};
    font-weight: 700;
`;

const RatingIcon = styled(Icon)`
    color: ${props => props.theme.colors.rating};
`;

const FilmMetaContainer = styled(Box)`
    flex-direction: row;
    align-items: center;
`;

const FilmBottomSheet: FC = ({ children }) => {
    const [isTextExpanded, setTextExpanded] = useState(false);

    const renderShowMoreButton = () =>
        isTextExpanded ? null : (
            <>
                <Spacer height={theme.indents.margin / 4} />
                <Pressable onPress={() => setTextExpanded(prev => !prev)}>
                    <Typography
                        css={css`
                            font-weight: 700;
                        `}
                    >
                        Показать ещё...
                    </Typography>
                </Pressable>
            </>
        );

    const [selectedFilm, setFilm] = useState<Film | null>(null);
    const sheetRef = React.useRef<BottomSheetBehavior>(null);

    const theme = useTheme();

    const openBottomSheet = useCallback((film: Film) => {
        setFilm(film);

        sheetRef.current?.snapTo(0);
    }, []);

    const closeBottomSheet = useCallback(() => {
        sheetRef.current?.snapTo(1);
    }, []);

    return (
        <>
            <FilmBottomSheetContext.Provider value={{ openBottomSheet, closeBottomSheet }}>
                {children}
            </FilmBottomSheetContext.Provider>

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
                        <Typography type="title">{selectedFilm.title}</Typography>

                        <Spacer height={theme.indents.margin / 2} />

                        <FilmMetaContainer>
                            <FilmMetaTypography>{selectedFilm.releaseDate}</FilmMetaTypography>

                            <Spacer width={theme.indents.margin / 2} />

                            <RatingIcon name="star" />
                            <Spacer width={theme.indents.margin / 10} />
                            <FilmMetaTypography>{selectedFilm.userScore}</FilmMetaTypography>

                            <Spacer width={theme.indents.margin / 2} />

                            <FilmMetaTypography>{selectedFilm.runningTime} мин.</FilmMetaTypography>
                        </FilmMetaContainer>

                        <Spacer height={theme.indents.margin / 2} />

                        <ShowMoreText
                            numOfLines={3}
                            isTextExpanded={isTextExpanded}
                            renderShowMoreButton={renderShowMoreButton}
                        >
                            {selectedFilm.description}
                        </ShowMoreText>

                        <Spacer height={theme.indents.margin} />

                        <Description title="Режиссёр">{selectedFilm.director}</Description>

                        <Spacer height={theme.indents.margin / 4} />

                        <Description title="Продюсер">{selectedFilm.producer}</Description>
                    </Box>
                </BottomSheet>
            )}
        </>
    );
};

export default FilmBottomSheet;
