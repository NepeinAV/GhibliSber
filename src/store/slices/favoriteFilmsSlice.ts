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
        addFavoriteFilm(state, action: PayloadAction<{ id: string }>) {
            state.favoriteFilmsIds[action.payload.id] = true;
        },
        removeFavoriteFilm(state, action: PayloadAction<{ id: string }>) {
            delete state.favoriteFilmsIds[action.payload.id];
        },
    },
});

const selectFilmsResult = filmsApi.endpoints.getFilms.select();

export const selectFilms = createSelector(selectFilmsResult, state => state.data);

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

export default favoriteFilmsSlice;
