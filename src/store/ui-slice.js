import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isLoading: false,
        noResultFound: false,
    },
    reducers: {
        setLoading(state, action) {
            state.isLoading = action.payload.isLoading;
        },
        setNoResultFound(state, action) {
            state.noResultFound = action.payload.noResultFound;
        }
    },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
