import axios from 'axios'

const API_URL = '/api/cards/'

// Create new card
const createCard = async (cardData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, cardData, config)

    return response.data
}

// Get user cards
const getCards = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

const cardService = {
    createCard,
    getCards
}

export default cardService