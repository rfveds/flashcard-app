import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import cardService from './cardService'

const initialState = {
    cards: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createCard.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createCard.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.cards.push(action.payload)
            })
            .addCase(createCard.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getCards.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCards.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.cards = action.payload
            })
            .addCase(getCards.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

// Create new card
export const createCard = createAsyncThunk(
    '/cards/create',
    async (cardData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await cardService.createCard(cardData, token)
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

// Get user cards
export const getCards = createAsyncThunk(
    'cards/getAll',
    async (thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await cardService.getCards(token)
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

export const { reset } = cardSlice.actions
export default cardSlice.reducer