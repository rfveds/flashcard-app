const asyncHandler = require('express-async-handler')

/**    
 *  @desc Get cards
 *  @route GET /api/cards
 *  @access Private
*/
const getCards = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get cards' })
})

/**    
 *  @desc Set card
 *  @route POST /api/cards
 *  @access Private
*/
const setCard = asyncHandler(async (req, res) => {
    if (!req.body.frontCardText) {
        res.status(400)
        throw new Error("Add a front card text")
    }
    res.status(200).json({ message: 'Set card' })
})

/**    
 *  @desc Update card
 *  @route PUT /api/cards/:id
 *  @access Private
*/
const updateCard = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Update card' })
})

/**    
 *  @desc Delete card
 *  @route DELETE /api/cards/:id
 *  @access Private
*/
const deleteCard = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Delete card' })
})

module.exports = {
    getCards,
    setCard,
    updateCard,
    deleteCard
}