import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Favorites as FavoritesScreen, Films as FilmsScreen } from './src/screens';

export enum NavigationScreen {
    Films = 'FILMS_SCREEN',
    Favorites = 'FAVORITES_SCREEN',
}

Navigation.registerComponent(NavigationScreen.Films, () => FilmsScreen);

Navigation.registerComponent(NavigationScreen.Favorites, () => FavoritesScreen);

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
                                        name: NavigationScreen.Films,
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
                                        name: NavigationScreen.Favorites,
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
