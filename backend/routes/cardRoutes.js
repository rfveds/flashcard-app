const express = require('express')
const router = express.Router()
const { getCards, setCard, updateCard, deleteCard } = require('../controllers/cardController')


router.get('/', getCards)

router.post('/', setCard)

router.put('/:id', updateCard)

router.delete('/:id', deleteCard)


module.exports = router

