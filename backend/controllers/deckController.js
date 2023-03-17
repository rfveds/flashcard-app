const asyncHandler = require('express-async-handler')

/**    
 *  @desc Get Deck
 *  @route GET /api/deck
 *  @access Private
*/
const getDeck = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Deck' })
})

/**    
 *  @desc Set Deck
 *  @route POST /api/deck
 *  @access Private
*/
const setDeck = asyncHandler(async (req, res) => {
    if (!req.body.frontDeckText) {
        res.status(400)
        throw new Error("Add a front Deck text")
    }
    res.status(200).json({ message: 'Set Deck' })
})

/**    
 *  @desc Update Deck
 *  @route PUT /api/deck/:id
 *  @access Private
*/
const updateDeck = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Update Deck' })
})

/**    
 *  @desc Delete Deck
 *  @route DELETE /api/deck/:id
 *  @access Private
*/
const deleteDeck = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Delete Deck' })
})

module.exports = {
    getDeck,
    setDeck,
    updateDeck,
    deleteDeck
}