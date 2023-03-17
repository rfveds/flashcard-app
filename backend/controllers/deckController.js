const asyncHandler = require('express-async-handler')
const Deck = require('../models/deckModel')

/**    
 *  @desc Get Decks
 *  @route GET /api/deck
 *  @access Private
*/
const getDecks = asyncHandler(async (req, res) => {

    const decks = await Deck.find()

    res.status(200).json(decks)
})

/**    
 *  @desc Set Deck
 *  @route POST /api/deck
 *  @access Private
*/
const setDeck = asyncHandler(async (req, res) => {

    if (!req.body.name) {
        res.status(400)
        throw new Error("Add a deck name")
    }

    const deck = await Deck.create({
        name: req.body.name
    })

    res.status(200).json(deck)
})

/**    
 *  @desc Update Deck
 *  @route PUT /api/deck/:id
 *  @access Private
*/
const updateDeck = asyncHandler(async (req, res) => {

    const deck = await Deck.findById(req.params.id)

    if (!deck) {
        res.status(400)
        throw new Error('Deck not found')
    }

    const updatedDeck = await Deck.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        }
    )

    res.status(200).json(updatedDeck)
})

/**    
 *  @desc Delete Deck
 *  @route DELETE /api/deck/:id
 *  @access Private
*/
const deleteDeck = asyncHandler(async (req, res) => {

    const deck = await Deck.findById(req.params.id)

    if (!deck) {
        res.status(400)
        throw new Error('Deck not found')
    }

    await deck.deleteOne()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getDecks,
    setDeck,
    updateDeck,
    deleteDeck
}