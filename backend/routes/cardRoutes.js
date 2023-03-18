const express = require('express')
const router = express.Router()
const { getCards, getCard, setCard, updateCard } = require('../controllers/cardController')
const { protect } = require('../middleware/authMiddleware')

router.route('/')
    .get(getCards)
    .post(setCard)

router.route('/:id')
    .get(protect, getCard)
    .put(protect, updateCard)
//     .delete(protect, deleteCard)

module.exports = router
