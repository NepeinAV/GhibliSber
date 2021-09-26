import React, { FC } from 'react';

import color from 'color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled, { css, useTheme } from 'styled-components/native';

import { Film } from '../../services/films';
import Box from '../../ui/Box';
import Description from '../../ui/Description';
import Pressable from '../../ui/Pressable';
import ShowMoreText from '../../ui/ShowMoreText';
import Spacer from '../../ui/Spacer';
import Typography from '../../ui/Typography';

type FilmLayoutProps = {
    isFullView?: boolean;
    film: Film;
    isTextExpanded: boolean;
    setTextExpanded: (mutator: (prev: boolean) => boolean) => void;
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

const FilmLayout: FC<FilmLayoutProps> = ({ isFullView, film, isTextExpanded, setTextExpanded }) => {
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
        <>
            <Typography type="title">{film.title}</Typography>

            <Spacer height={theme.indents.margin / 2} />

            <FilmMetaContainer>
                <FilmMetaTypography>{film.releaseDate}</FilmMetaTypography>

                <Spacer width={theme.indents.margin / 2} />

                <RatingIcon name="star" />
                <Spacer width={theme.indents.margin / 10} />
                <FilmMetaTypography>{film.userScore}</FilmMetaTypography>

                {isFullView && (
                    <>
                        <Spacer width={theme.indents.margin / 2} />

                        <FilmMetaTypography>{film.runningTime} мин.</FilmMetaTypography>
                    </>
                )}
            </FilmMetaContainer>

            <Spacer height={theme.indents.margin / 2} />

            <ShowMoreText numOfLines={3} isTextExpanded={isTextExpanded} renderShowMoreButton={renderShowMoreButton}>
                {film.description}
            </ShowMoreText>

            {isFullView && (
                <>
                    <Spacer height={theme.indents.margin} />

                    <Description title="Режиссёр">{film.director}</Description>

                    <Spacer height={theme.indents.margin / 4} />

                    <Description title="Продюсер">{film.producer}</Description>
                </>
            )}
        </>
    );
};

export default FilmLayout;
