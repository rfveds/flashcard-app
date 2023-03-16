/**    
 *  @desc Get cards
 *  @route GET /api/cards
 *  @access Private
*/
const getCards = (req, res) => {
    res.status(200).json({ message: 'Get cards' })
}

/**    
 *  @desc Set card
 *  @route POST /api/cards
 *  @access Private
*/
const setCard = (req, res) => {
    res.status(200).json({ message: 'Set card' })
}

/**    
 *  @desc Update card
 *  @route PUT /api/cards/:id
 *  @access Private
*/
const updateCard = (req, res) => {
    res.status(200).json({ message: 'Update card' })
}

/**    
 *  @desc Delete card
 *  @route DELETE /api/cards/:id
 *  @access Private
*/
const deleteCard = (req, res) => {
    res.status(200).json({ message: 'Delete card' })
}





module.exports = {
    getCards,
    setCard,
    updateCard,
    deleteCard
}