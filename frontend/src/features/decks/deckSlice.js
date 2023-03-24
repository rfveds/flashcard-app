import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import deckService from './deckService'

const initialState = {
    decks: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Get decks
export const getDecks = createAsyncThunk(
    'decks/getAll',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await deckService.getDecks(token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Create new deck
export const createDeck = createAsyncThunk(
    '/decks/create',
    async (deckData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await deckService.createDeck(deckData, token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    })


// Delete deck
export const deleteDeck = createAsyncThunk(
    '/decks/delete',
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await deckService.deleteDeck(id, token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    })


    export const deckSlice = createSlice({
        name: 'deck',
        initialState,
        reducers: {
            reset: (state) => initialState
        },
        extraReducers: (builder) => {
            builder
                .addCase(createDeck.pending, (state) => {
                    state.isLoading = true
                })
                .addCase(createDeck.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.decks.push(action.payload)
                })
                .addCase(createDeck.rejected, (state, action) => {
                    state.isLoading = false
                    state.isError = true
                    state.message = action.payload
                })
                .addCase(getDecks.pending, (state) => {
                    state.isLoading = true
                })
                .addCase(getDecks.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.decks = action.payload
                })
                .addCase(getDecks.rejected, (state, action) => {
                    state.isLoading = false
                    state.isError = true
                    state.message = action.payload
                })
                .addCase(deleteDeck.pending, (state) => {
                    state.isLoading = true
                })
                .addCase(deleteDeck.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.decks = state.decks
                        .filter(
                            (deck) => deck._id !== action.payload.id
                        )
                })
                .addCase(deleteDeck.rejected, (state, action) => {
                    state.isLoading = false
                    state.isError = true
                    state.message = action.payload
                })
        }
    })
    
    export const { reset } = deckSlice.actions
    export default deckSlice.reducer