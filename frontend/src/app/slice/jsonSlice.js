import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    json: {
        request: null,
        response: null,
        feature: '',
        isFetching: false,
        isError: false,
    },
}

export const jsonSlice = createSlice({
    name: 'jsonSlice',
    initialState: initialState,
    reducers: {
        updateState: (state, action) => {
            state.json = { ...state.json, ...action.payload }
        },
        resetState: state => {
            state.json = { ...initialState.json }
        },
    },
})

export const { updateState, resetState } = jsonSlice.actions

const jsonReducer = jsonSlice.reducer

export const jsonSelector = state => state.jsonReducer.json

export default jsonReducer
