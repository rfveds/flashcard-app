const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    front: {
        type: String,
        required: true
    },
    back: {
        type: String,
        required: true
    },
    easy: {
        type: Number,
        default: 0
    },
    medium: {
        type: Number,
        default: 0
    },
    hard: {
        type: Number,
        default: 0
    },
    priority: {
        type: Number,
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
    deck: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Deck',
        // required: true
    }
});

module.exports = mongoose.model('Card', cardSchema);
