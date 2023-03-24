import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import cardReducer from '../features/cards/cardSlice'
import deckReducer from '../features/decks/deckSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        cards: cardReducer,
        decks: deckReducer
    }
})