const express = require('express')
const router = express.Router()
const { getDeck, setDeck, updateDeck, deleteDeck } = require('../controllers/deckController')

router.route('/')
    .get(getDeck)
    .post(setDeck)

router.route('/:id')
    .put(updateDeck)
    .delete(deleteDeck)

module.exports = router

