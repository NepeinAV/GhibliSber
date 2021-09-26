import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { useSelector } from 'react-redux';

import { compose } from 'redux';
import styled, { useTheme } from 'styled-components/native';

import { Film } from '../../services/films';
import { selectFavoriteFilms } from '../../store/slices/favoriteFilmsSlice';

import withReduxProvider from '../../store/withReduxProvider';
import withThemeProvider from '../../theme/withThemeProvider';
import Spacer from '../../ui/Spacer';
import FilmCard from '../films/FilmCard';

const ItemSeparator = styled(Spacer).attrs(props => ({ height: props.theme.indents.margin * (3 / 4) }))``;

const extractFilmId = (film: Film) => film.id;
const renderItem = ({ item }: ListRenderItemInfo<Film>) => <FilmCard film={item} />;

const Favorites = () => {
    const films = useSelector(selectFavoriteFilms);

    const theme = useTheme();

    return (
        <FlatList
            data={films}
            keyExtractor={extractFilmId}
            renderItem={renderItem}
            contentContainerStyle={{ padding: theme.indents.padding }}
            ItemSeparatorComponent={ItemSeparator}
        />
    );
};

export default compose(withReduxProvider, withThemeProvider)(Favorites) as typeof Favorites;
