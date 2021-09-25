import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { compose } from '@reduxjs/toolkit';
import styled, { useTheme } from 'styled-components/native';

import Card from '../ui/Card';
import Pressable from '../ui/Pressable';
import Box from '../ui/Box';
import Typography from '../ui/Typography';

import withReduxProvider from '../store/withReduxProvider';
import withThemeProvider from '../theme/withThemeProvider';
import { Film, useGetFilmsQuery } from '../services/films';

const ItemSeparator = styled(Box)`
    height: ${props => props.theme.indents.margin / 2}px;
`;

const Films = () => {
    const { data = [] } = useGetFilmsQuery();

    const theme = useTheme();

    const renderItem = useCallback(
        (item: ListRenderItemInfo<Film>) => (
            <Pressable
                onPress={() => {
                    console.log(item.item.id);
                }}
            >
                <Card>
                    <Typography type="title">{item.item.title}</Typography>
                    <Typography>{item.item.description}</Typography>
                </Card>
            </Pressable>
        ),
        [],
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            contentContainerStyle={{ padding: theme.indents.padding }}
            ItemSeparatorComponent={() => <ItemSeparator />}
        />
    );
};

export default compose(withReduxProvider, withThemeProvider)(Films);
