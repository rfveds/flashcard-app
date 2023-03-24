import axios from 'axios'

const API_URL = '/api/decks/'

// Create new deck
const createDeck = async (deckData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, deckData, config)

    return response.data
}

// Get user decks
const getDecks = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// Delete users deck
const deleteDeck = async (deckId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + deckId, config)

    return response.data
}

const deckService = {
    createDeck,
    getDecks,
    deleteDeck
}

export default deckService