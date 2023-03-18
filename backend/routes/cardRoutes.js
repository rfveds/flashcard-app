const express = require('express')
const router = express.Router()
const { getCards, setCard } = require('../controllers/cardController')
const { protect } = require('../middleware/authMiddleware')

router.route('/')
    .get(getCards)
    .post(setCard)

// router.route('/:id')
//     .get(protect, getDeck)
//     .put(protect, updateDeck)
//     .delete(protect, deleteDeck)

module.exports = router
