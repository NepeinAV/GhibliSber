import React from 'react';
import { ActivityIndicator, FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';
import { compose } from 'redux';
import styled, { useTheme, css } from 'styled-components/native';

import { Film, selectFilmsLoadingState } from '../../services/films';
import { selectFavoriteFilms } from '../../store/slices/favoriteFilmsSlice';
import FilmBottomSheet from '../films/FilmBottomSheet';

import withReduxProvider from '../../store/withReduxProvider';
import withThemeProvider from '../../theme/withThemeProvider';
import Spacer from '../../ui/Spacer';
import FilmCard from '../films/FilmCard';
import Box from '../../ui/Box';
import Typography from '../../ui/Typography';

const ItemSeparator = styled(Spacer).attrs(props => ({ height: props.theme.indents.margin * (3 / 4) }))``;

const extractFilmId = (film: Film) => film.id;
const renderItem = ({ item }: ListRenderItemInfo<Film>) => <FilmCard film={item} />;

const Favorites = () => {
    const isFilmsLoading = useSelector(selectFilmsLoadingState);
    const films = useSelector(selectFavoriteFilms);

    const theme = useTheme();

    if (!isFilmsLoading && films.length === 0) {
        return (
            <Box
                style={StyleSheet.absoluteFillObject}
                css={css`
                    justify-content: center;
                    align-items: center;
                `}
            >
                <Typography
                    css={css`
                        font-weight: 700;
                    `}
                >
                    Вам ничего не понравилось :(
                </Typography>
            </Box>
        );
    }

    return isFilmsLoading ? (
        <ActivityIndicator style={StyleSheet.absoluteFillObject} size="large" />
    ) : (
        <FilmBottomSheet>
            <FlatList
                data={films}
                keyExtractor={extractFilmId}
                renderItem={renderItem}
                contentContainerStyle={{ padding: theme.indents.padding }}
                ItemSeparatorComponent={ItemSeparator}
            />
        </FilmBottomSheet>
    );
};

export default compose(withReduxProvider, withThemeProvider)(Favorites) as typeof Favorites;
