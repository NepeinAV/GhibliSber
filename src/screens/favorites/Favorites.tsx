import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { useSelector } from 'react-redux';

import { compose } from 'redux';
import { Film } from '../../services/films';
import { selectFavoriteFilms } from '../../store/slices/favoriteFilmsSlice';

import withReduxProvider from '../../store/withReduxProvider';
import withThemeProvider from '../../theme/withThemeProvider';
import FilmCard from '../films/FilmCard';

const renderItem = ({ item }: ListRenderItemInfo<Film>) => <FilmCard film={item} />;

const Favorites = () => {
    const films = useSelector(selectFavoriteFilms);

    return <FlatList data={films} renderItem={renderItem} />;
};

export default compose(withReduxProvider, withThemeProvider)(Favorites) as typeof Favorites;
