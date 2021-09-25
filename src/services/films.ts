import camelcaseKeys from 'camelcase-keys';

import { ghibliApi } from '../store/api';

export type Film = {
    id: string;
    title: string;
    releaseDate: string;
    description: string;
    userScore: string;
};

const filmsApi = ghibliApi.injectEndpoints({
    endpoints: builder => ({
        getFilms: builder.query<Film[], void>({
            query: () => 'films',
            transformResponse: (response: Film[]) => camelcaseKeys(response),
        }),
    }),
    overrideExisting: true,
});

export const { useGetFilmsQuery } = filmsApi;
