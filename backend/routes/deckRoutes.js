const express = require('express')
const router = express.Router()
const { getDecks, getDeck, setDeck, updateDeck, deleteDeck } = require('../controllers/deckController')
const { protect } = require('../middleware/authMiddleware')

router.route('/')
    .get(protect, getDecks)
    .post(protect, setDeck)

router.route('/:id')
    .get(protect, getDeck)
    .put(protect, updateDeck)
    .delete(protect, deleteDeck)

module.exports = router

