import React from 'react';
import { ActivityIndicator, FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';

import { compose } from '@reduxjs/toolkit';
import styled, { useTheme, css } from 'styled-components/native';

import withReduxProvider from '../../store/withReduxProvider';
import withThemeProvider from '../../theme/withThemeProvider';
import { Film, useGetFilmsQuery } from '../../services/films';
import Spacer from '../../ui/Spacer';
import FilmCard from './FilmCard';
import FilmBottomSheet from './FilmBottomSheet';
import Box from '../../ui/Box';
import Typography from '../../ui/Typography';

const ItemSeparator = styled(Spacer).attrs(props => ({ height: props.theme.indents.margin * (3 / 4) }))``;

const extractFilmId = (film: Film) => film.id;
const renderItem = ({ item }: ListRenderItemInfo<Film>) => <FilmCard film={item} />;

const Films = () => {
    const { data = [], isLoading } = useGetFilmsQuery();

    const theme = useTheme();

    if (!isLoading && data.length === 0) {
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
                    Фильмов нет :(
                </Typography>
            </Box>
        );
    }

    return isLoading ? (
        <ActivityIndicator style={StyleSheet.absoluteFillObject} size="large" />
    ) : (
        <FilmBottomSheet>
            <FlatList
                data={data}
                keyExtractor={extractFilmId}
                renderItem={renderItem}
                contentContainerStyle={{ padding: theme.indents.padding }}
                ItemSeparatorComponent={ItemSeparator}
            />
        </FilmBottomSheet>
    );
};

export default compose(withReduxProvider, withThemeProvider)(Films) as typeof Films;
