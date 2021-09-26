import 'react-native-gesture-handler';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Favorites as FavoritesScreen, Films as FilmsScreen } from './src/screens';

Navigation.registerComponent('FILMS_SCREEN', () => gestureHandlerRootHOC(FilmsScreen));
Navigation.registerComponent('FAVORITES_SCREEN', () => gestureHandlerRootHOC(FavoritesScreen));

Navigation.setDefaultOptions({
    topBar: {
        title: {
            color: 'black',
        },
    },
    bottomTab: {
        iconColor: '#888',
        selectedIconColor: 'black',
    },
});

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            bottomTabs: {
                id: 'MAIN_BOTTOM_TABS',
                children: [
                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: 'FILMS_SCREEN',
                                        options: { topBar: { title: { text: 'Фильмы' } } },
                                    },
                                },
                            ],
                            options: {
                                bottomTab: {
                                    icon: Icon.getImageSourceSync('movie', 30),
                                    text: 'Фильмы',
                                },
                            },
                        },
                    },
                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: 'FAVORITES_SCREEN',
                                        options: { topBar: { title: { text: 'Избранное' } } },
                                    },
                                },
                            ],
                            options: {
                                bottomTab: {
                                    icon: Icon.getImageSourceSync('star-outline', 30),
                                    text: 'Избранное',
                                },
                            },
                        },
                    },
                ],
            },
        },
    });
});
