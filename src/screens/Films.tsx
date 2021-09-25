import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo, Text, View } from 'react-native';

import { compose } from '@reduxjs/toolkit';
import { useTheme } from 'styled-components/native';

import Card from '../ui/Card';
import Pressable from '../ui/Pressable';

import withReduxProvider from '../store/withReduxProvider';
import withThemeProvider from '../theme/withThemeProvider';
import { Film, useGetFilmsQuery } from '../services/films';

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
                    <Text>{item.item.title}</Text>
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
            ItemSeparatorComponent={() => <View style={{ height: theme.indents.margin / 2 }} />}
        />
    );
};

export default compose(withReduxProvider, withThemeProvider)(Films);
