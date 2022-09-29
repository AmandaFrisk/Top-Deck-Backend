const mongoose = require('mongoose');

const deckSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
    }
})

const Deck = mongoose.model('Deck', deckSchema)

module.exports = Deck;