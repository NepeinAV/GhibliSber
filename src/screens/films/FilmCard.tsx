import React, { FC, memo } from 'react';

import color from 'color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled, { useTheme } from 'styled-components/native';

import { Film } from '../../services/films';

import Box from '../../ui/Box';
import Card from '../../ui/Card';
import Pressable from '../../ui/Pressable';
import Spacer from '../../ui/Spacer';
import Typography from '../../ui/Typography';

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
    const theme = useTheme();

    return (
        <Pressable
            onPress={() => {
                console.log(film);
            }}
        >
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

                <Typography>{film.description}</Typography>
            </Card>
        </Pressable>
    );
};

export default memo(FilmCard);
