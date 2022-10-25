import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        entities: [],
    },
    reducers: {
        search(state, action) {
            state.entities = action.payload.entities ?? [];
        },
        // setLoading(state, action) {
        //     state.loading = action.payload.isLoading;
        // }
    },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
