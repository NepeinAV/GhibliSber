import { Navigation } from 'react-native-navigation';
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
                                bottomTab: {},
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
                                bottomTab: {},
                            },
                        },
                    },
                ],
            },
        },
    });
});
