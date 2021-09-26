import React, { FC, memo, useState } from 'react';

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
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { addFavoriteFilm, removeFavoriteFilm } from '../../store/slices/favoriteFilmsSlice';

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

const FavoriteIcon = styled(Icon)`
    font-size: 22px;
`;

const FilmMetaContainer = styled(Box)`
    flex-direction: row;
    align-items: center;
`;

const FilmCard: FC<FilmCardProps> = ({ film }) => {
    const [isTextExpanded, setTextExpanded] = useState(false);
    const isFavoriteFilm = useSelector<RootState>(state => state.favoriteFilms.favoriteFilmsIds[film.id]);
    const dispatch = useDispatch();

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
        <Pressable>
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
                    <Pressable
                        css={css`
                            background-color: ${props => props.theme.colors.secondary};
                            padding: 4px 8px;
                            border-radius: ${props => props.theme.borderRadius}px;
                            align-self: flex-start;
                        `}
                        onPress={() => {
                            isFavoriteFilm ? dispatch(removeFavoriteFilm(film.id)) : dispatch(addFavoriteFilm(film.id));
                        }}
                    >
                        {isFavoriteFilm ? (
                            <FavoriteIcon
                                name="favorite"
                                css={css`
                                    color: red;
                                `}
                            />
                        ) : (
                            <FavoriteIcon
                                name="favorite-border"
                                css={css`
                                    color: ${props => props.theme.colors.primary};
                                `}
                            />
                        )}
                    </Pressable>
                </Box>
            </Card>
        </Pressable>
    );
};

export default memo(FilmCard);
