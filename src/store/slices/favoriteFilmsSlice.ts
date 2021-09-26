import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '..';

import { Film, filmsApi } from '../../services/films';

type FavoriteFilmsState = {
    favoriteFilmsIds: Record<string, true>;
};

const initialState: FavoriteFilmsState = {
    favoriteFilmsIds: {},
};

const favoriteFilmsSlice = createSlice({
    name: 'favoriteFilms',
    initialState,
    reducers: {
        addFavoriteFilm(state, action: PayloadAction<string>) {
            state.favoriteFilmsIds[action.payload] = true;
        },
        removeFavoriteFilm(state, action: PayloadAction<string>) {
            delete state.favoriteFilmsIds[action.payload];
        },
    },
});

const selectFilmsResult = filmsApi.endpoints.getFilms.select();
const selectFilms = createSelector(selectFilmsResult, state => state.data);

export const selectFavoriteFilms = createSelector<
    RootState,
    Film[] | undefined,
    FavoriteFilmsState['favoriteFilmsIds'],
    Film[]
>(
    selectFilms,
    state => state.favoriteFilms.favoriteFilmsIds,
    (films = [], favoriteFilms) => films.filter(film => favoriteFilms[film.id]),
);

export const { addFavoriteFilm, removeFavoriteFilm } = favoriteFilmsSlice.actions;

export default favoriteFilmsSlice;
