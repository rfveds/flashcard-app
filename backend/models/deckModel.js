const mongoose = require('mongoose');

const deckSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // cards: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Card'
  // }]
});

module.exports = mongoose.model('Deck', deckSchema);
