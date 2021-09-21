import { createSlice } from '@reduxjs/toolkit';

type Film = {
    id: string;
    title: string;
    releaseDate: string;
    description: string;
    userScore: string;
};

export type FilmsSlice = {
    films: Film[];
};

export const initialState: FilmsSlice = {
    films: [],
};

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {},
});

export default filmsSlice.reducer;
