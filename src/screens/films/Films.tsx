import React from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';

import { compose } from '@reduxjs/toolkit';
import styled, { useTheme } from 'styled-components/native';

import withReduxProvider from '../../store/withReduxProvider';
import withThemeProvider from '../../theme/withThemeProvider';
import { Film, useGetFilmsQuery } from '../../services/films';
import Spacer from '../../ui/Spacer';
import FilmCard from './FilmCard';
import FilmBottomSheet from './FilmBottomSheet';

const ItemSeparator = styled(Spacer).attrs(props => ({ height: props.theme.indents.margin * (3 / 4) }))``;

const extractFilmId = (film: Film) => film.id;
const renderItem = ({ item }: ListRenderItemInfo<Film>) => <FilmCard film={item} />;

const Films = () => {
    const { data = [] } = useGetFilmsQuery();

    const theme = useTheme();

    return (
        <FilmBottomSheet>
            <View>
                <FlatList
                    data={data}
                    keyExtractor={extractFilmId}
                    renderItem={renderItem}
                    contentContainerStyle={{ padding: theme.indents.padding }}
                    ItemSeparatorComponent={ItemSeparator}
                />
            </View>
        </FilmBottomSheet>
    );
};

export default compose(withReduxProvider, withThemeProvider)(Films) as typeof Films;
