import React, { FC, memo, useContext, useState } from 'react';

import { css, useTheme } from 'styled-components/native';

import { Film } from '../../services/films';

import Box from '../../ui/Box';
import Card from '../../ui/Card';
import Pressable from '../../ui/Pressable';
import Spacer from '../../ui/Spacer';
import FavoriteButton from './FavoriteButton';
import { FilmBottomSheetContext } from './FilmBottomSheet';
import FilmLayout from './FilmLayout';

type FilmCardProps = {
    film: Film;
};

const FilmCard: FC<FilmCardProps> = ({ film }) => {
    const [isTextExpanded, setTextExpanded] = useState(false);

    const { openBottomSheet } = useContext(FilmBottomSheetContext);

    const theme = useTheme();

    return (
        <Pressable onPress={() => openBottomSheet(film)}>
            <Card>
                <FilmLayout film={film} isTextExpanded={isTextExpanded} setTextExpanded={setTextExpanded} />

                <Spacer height={theme.indents.margin / 2} />

                <Box
                    css={css`
                        flex-direction: row;
                    `}
                >
                    <FavoriteButton filmId={film.id} />
                </Box>
            </Card>
        </Pressable>
    );
};

export default memo(FilmCard);
