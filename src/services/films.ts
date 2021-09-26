import camelcaseKeys from 'camelcase-keys';

import { ghibliApi } from '../store/api';

export type Film = {
    id: string;
    title: string;
    releaseDate: string;
    description: string;
    userScore: string;
};

type FilmResponse = {
    id: string;
    title: string;
    release_date: string;
    description: string;
    rt_score: string;
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

export const { useGetFilmsQuery } = filmsApi;
