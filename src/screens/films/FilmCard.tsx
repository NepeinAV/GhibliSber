import React, { FC, memo, useContext, useState } from 'react';

import color from 'color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled, { css, useTheme } from 'styled-components/native';

import { Film } from '../../services/films';

import Box from '../../ui/Box';
import Card from '../../ui/Card';
import Pressable from '../../ui/Pressable';
import Spacer from '../../ui/Spacer';
import Typography from '../../ui/Typography';
import ShowMoreText from '../../ui/ShowMoreText';
import FavoriteButton from './FavoriteButton';
import { FilmBottomSheetContext } from './FilmBottomSheet';

type FilmCardProps = {
    film: Film;
};

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

const FilmCard: FC<FilmCardProps> = ({ film }) => {
    const [isTextExpanded, setTextExpanded] = useState(false);

    const { openBottomSheet } = useContext(FilmBottomSheetContext);

    const theme = useTheme();

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

    return (
        <Pressable onPress={() => openBottomSheet(film)}>
            <Card>
                <Typography type="title">{film.title}</Typography>

                <Spacer height={theme.indents.margin / 2} />

                <FilmMetaContainer>
                    <FilmMetaTypography>{film.releaseDate}</FilmMetaTypography>

                    <Spacer width={theme.indents.margin / 2} />

                    <RatingIcon name="star" />
                    <Spacer width={theme.indents.margin / 10} />
                    <FilmMetaTypography>{film.userScore}</FilmMetaTypography>
                </FilmMetaContainer>

                <Spacer height={theme.indents.margin / 2} />

                <ShowMoreText
                    numOfLines={3}
                    isTextExpanded={isTextExpanded}
                    renderShowMoreButton={renderShowMoreButton}
                >
                    {film.description}
                </ShowMoreText>

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
