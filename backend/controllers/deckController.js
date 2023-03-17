const asyncHandler = require('express-async-handler')
const Deck = require('../models/deckModel')
const User = require('../models/userModel')

/**    
 *  @desc   Get Decks
 *  @route  GET /api/deck
 *  @access Private
*/
const getDecks = asyncHandler(async (req, res) => {

    const decks = await Deck.find({ user: req.user.id })

    res.status(200).json(decks)
})

/**    
 *  @desc   Get Deck
 *  @route  GET /api/deck/:id
 *  @access Private
*/
const getDeck = asyncHandler(async (req, res) => {

    const deck = await Deck.findById(req.params.id)

    res.status(200).json(deck)
})

/**    
 *  @desc   Set Deck
 *  @route  POST /api/deck
 *  @access Private
*/
const setDeck = asyncHandler(async (req, res) => {

    if (!req.body.name) {
        res.status(400)
        throw new Error("Add a deck name")
    }

    const deck = await Deck.create({
        name: req.body.name,
        user: req.user.id
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
    const user = await User.findById(req.user.id)

    if (!deck) {
        res.status(400)
        throw new Error('Deck not found')
    }

    // Check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user 
    if (deck.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
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
 *  @desc   Delete Deck
 *  @route  DELETE /api/deck/:id
 *  @access Private
*/
const deleteDeck = asyncHandler(async (req, res) => {

    const deck = await Deck.findById(req.params.id)
    const user = await User.findById(req.user.id)

    if (!deck) {
        res.status(400)
        throw new Error('Deck not found')
    }

    // Check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user 
    if (deck.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }


    await deck.deleteOne()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getDecks,
    getDeck,
    setDeck,
    updateDeck,
    deleteDeck
}