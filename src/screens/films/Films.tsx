import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { compose } from '@reduxjs/toolkit';
import styled, { useTheme, css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from 'color';

import Card from '../../ui/Card';
import Pressable from '../../ui/Pressable';
import Typography from '../../ui/Typography';
import withReduxProvider from '../../store/withReduxProvider';
import withThemeProvider from '../../theme/withThemeProvider';
import { Film, useGetFilmsQuery } from '../../services/films';
import Spacer from '../../ui/Spacer';
import FilmCard from './FilmCard';

const ItemSeparator = styled(Spacer).attrs(props => ({ height: props.theme.indents.margin * (3 / 4) }))``;

const extractFilmId = (film: Film) => film.id;

const Films = () => {
    const { data = [] } = useGetFilmsQuery();

    const theme = useTheme();

    const renderItem = useCallback(({ item }: ListRenderItemInfo<Film>) => <FilmCard film={item} />, []);

    return (
        <FlatList
            data={data}
            keyExtractor={extractFilmId}
            renderItem={renderItem}
            contentContainerStyle={{ padding: theme.indents.padding }}
            ItemSeparatorComponent={() => <ItemSeparator />}
        />
    );
};

export default compose(withReduxProvider, withThemeProvider)(Films) as Films;
