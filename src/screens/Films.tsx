import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { compose } from '@reduxjs/toolkit';
import styled, { useTheme, css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from 'color';

import Card from '../ui/Card';
import Pressable from '../ui/Pressable';
import Typography from '../ui/Typography';
import withReduxProvider from '../store/withReduxProvider';
import withThemeProvider from '../theme/withThemeProvider';
import { Film, useGetFilmsQuery } from '../services/films';
import Spacer from '../ui/Spacer';
import Box from '../ui/Box';

const ItemSeparator = styled(Spacer).attrs(props => ({ height: props.theme.indents.margin * (3 / 4) }))``;

const FilmMetaTypography = styled(Typography)`
    color: ${props => color(props.theme.colors.text).lighten(4).hex()};
    font-weight: 700;
`;

const RatingIcon = styled(Icon)`
    color: ${props => props.theme.colors.rating};
`;

const Films = () => {
    const { data = [] } = useGetFilmsQuery();

    const theme = useTheme();

    const renderItem = useCallback(
        ({ item }: ListRenderItemInfo<Film>) => (
            <Pressable
                onPress={() => {
                    console.log(item);
                }}
            >
                <Card>
                    <Typography type="title">{item.title}</Typography>

                    <Spacer height={theme.indents.margin / 2} />

                    <Box
                        css={css`
                            flex-direction: row;
                            align-items: center;
                        `}
                    >
                        <FilmMetaTypography>{item.releaseDate}</FilmMetaTypography>

                        <Spacer width={theme.indents.margin / 2} />

                        <RatingIcon name="star" />
                        <Spacer width={theme.indents.margin / 10} />
                        <FilmMetaTypography>{item.userScore}</FilmMetaTypography>
                    </Box>

                    <Spacer height={theme.indents.margin / 2} />

                    <Typography>{item.description}</Typography>
                </Card>
            </Pressable>
        ),
        [theme.indents.margin],
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

export default compose<typeof Films>(withReduxProvider, withThemeProvider)(Films);
