import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Favorites as FavoritesScreen, Films as FilmsScreen } from './src/screens';

export enum NavigationScreen {
    Films = 'FILMS_SCREEN',
    Favorites = 'FAVORITES_SCREEN',
}

Navigation.registerComponent(NavigationScreen.Films, () => FilmsScreen);

Navigation.registerComponent(NavigationScreen.Favorites, () => FavoritesScreen);

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
                                        id: NavigationScreen.Films,
                                        name: NavigationScreen.Films,
                                    },
                                },
                            ],
                            options: {
                                bottomTab: {
                                    icon: Icon.getImageSourceSync('movie', 30, '#888'),
                                    selectedIconColor: 'black',
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
                                        id: NavigationScreen.Favorites,
                                        name: NavigationScreen.Favorites,
                                    },
                                },
                            ],
                            options: {
                                bottomTab: {
                                    icon: Icon.getImageSourceSync('star-outline', 30, '#888'),
                                    selectedIconColor: 'black',
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
