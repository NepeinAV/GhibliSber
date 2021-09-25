import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ghibliApi = createApi({
    reducerPath: 'ghibli',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://ghibliapi.herokuapp.com/' }),
    endpoints: () => ({}),
});
