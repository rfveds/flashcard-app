const express = require('express')
const router = express.Router()
const { getDecks, setDeck, updateDeck, deleteDeck } = require('../controllers/deckController')
const { protect } = require('../middleware/authMiddleware')

router.route('/')
    .get(protect, getDecks)
    .post(protect, setDeck)

router.route('/:id')
    .put(protect, updateDeck)
    .delete(protect, deleteDeck)

module.exports = router

