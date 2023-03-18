const asyncHandler = require('express-async-handler')
const Card = require('../models/cardModel')
const Deck = require('../models/deckModel')
const User = require('../models/userModel')

/**    
 *  @desc   Get Cards
 *  @route  GET /api/card
 *  @access Public
*/
const getCards = asyncHandler(async (req, res) => {

    const cards = await Card.find()

    res.status(200).json(cards)
})

/**    
 *  @desc   Set Card
 *  @route  POST /api/card
 *  @access Private
*/
const setCard = asyncHandler(async (req, res) => {

    const { front, back, deckId } = req.body

    if (!front || !back) {
        res.status(400)
        throw new Error("Add card data")
    }

    const card = await Card.create({
        front: front,
        back: back,
        deck: deckId
    })

    await Deck.findByIdAndUpdate(
        deckId,
        { $push: { cards: card._id } },
        { new: true }
      );

    res.status(200).json(card)
})

// /**    
//  *  @desc Update Card
//  *  @route PUT /api/card/:id
//  *  @access Private
// */
// const updateCard = asyncHandler(async (req, res) => {

//     const card = await Card.findById(req.params.id)
//     const user = await User.findById(req.user.id)

//     if (!card) {
//         res.status(400)
//         throw new Error('Card not found')
//     }

//     // Check for user
//     if (!user) {
//         res.status(401)
//         throw new Error('User not found')
//     }

//     // Make sure the logged in user matches the goal user 
//     if (card.user.toString() !== user.id) {
//         res.status(401)
//         throw new Error('User not authorized')
//     }

//     const updatedCard = await Card.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         {
//             new: true,
//         }
//     )

//     res.status(200).json(updatedCard)
// })

// /**    
//  *  @desc   Delete Card
//  *  @route  DELETE /api/card/:id
//  *  @access Private
// */
// const deleteCard = asyncHandler(async (req, res) => {

//     const card = await Card.findById(req.params.id)
//     const user = await User.findById(req.user.id)

//     if (!card) {
//         res.status(400)
//         throw new Error('Card not found')
//     }

//     // Check for user
//     if (!user) {
//         res.status(401)
//         throw new Error('User not found')
//     }

//     // Make sure the logged in user matches the goal user 
//     if (card.user.toString() !== user.id) {
//         res.status(401)
//         throw new Error('User not authorized')
//     }


//     await card.deleteOne()

//     res.status(200).json({ id: req.params.id })
// })

module.exports = {
    getCards,
    setCard,
    // updateCard,
    // deleteCard
}