import React, { FC, useCallback } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import { css } from 'styled-components';
import styled from 'styled-components/native';

import { RootState } from '../../store';
import { removeFavoriteFilm, addFavoriteFilm } from '../../store/slices/favoriteFilmsSlice';
import Pressable from '../../ui/Pressable';

type FavoriteButtonProps = {
    filmId: string;
};

const FavoriteIcon = styled(Icon)`
    font-size: 22px;
`;

const DisabledFavoriteIcon = styled(FavoriteIcon).attrs(() => ({
    name: 'favorite',
}))`
    color: red;
`;

const EnabledFavoriteIcon = styled(FavoriteIcon).attrs(() => ({
    name: 'favorite-border',
}))`
    color: ${props => props.theme.colors.primary};
`;

const FavoriteButton: FC<FavoriteButtonProps> = ({ filmId }) => {
    const isFavoriteFilm = useSelector<RootState>(state => state.favoriteFilms.favoriteFilmsIds[filmId]);
    const dispatch = useDispatch();

    const toggleFavoriteStatus = useCallback(() => {
        const callback = isFavoriteFilm ? removeFavoriteFilm : addFavoriteFilm;

        dispatch(callback(filmId));
    }, [dispatch, filmId, isFavoriteFilm]);

    return (
        <Pressable
            css={css`
                background-color: ${props => props.theme.colors.secondary};
                padding: 4px 8px;
                border-radius: ${props => props.theme.borderRadius}px;
                align-self: flex-start;
            `}
            onPress={toggleFavoriteStatus}
        >
            {isFavoriteFilm ? <DisabledFavoriteIcon /> : <EnabledFavoriteIcon />}
        </Pressable>
    );
};

export default FavoriteButton;
