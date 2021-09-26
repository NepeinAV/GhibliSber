import camelcaseKeys from 'camelcase-keys';
import { createSelector } from '@reduxjs/toolkit';

import { ghibliApi } from '../store/api';

export type Film = {
    id: string;
    title: string;
    releaseDate: string;
    description: string;
    userScore: string;
    director: string;
    producer: string;
    runningTime: string;
};

type FilmResponse = {
    id: string;
    title: string;
    release_date: string;
    description: string;
    rt_score: string;
    director: string;
    producer: string;
    running_time: string;
};

export const filmsApi = ghibliApi.injectEndpoints({
    endpoints: builder => ({
        getFilms: builder.query<Film[], void>({
            query: () => 'films',
            transformResponse: (response: FilmResponse[]) =>
                camelcaseKeys(response.map(item => ({ ...item, userScore: item.rt_score }))),
        }),
    }),
    overrideExisting: true,
});

const selectFilmsResult = filmsApi.endpoints.getFilms.select();
export const selectFilms = createSelector(selectFilmsResult, state => state.data);
export const selectFilmsLoadingState = createSelector(selectFilmsResult, state => state.isLoading);

export const { useGetFilmsQuery } = filmsApi;
