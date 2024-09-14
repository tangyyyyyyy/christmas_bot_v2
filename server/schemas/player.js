const { Schema, model } = require('mongoose');
const { Item, itemSchema } = require('./item');
const { Ornament, ornamentSchema } = require('./ornament');

const playerSchema = new Schema({
    playerId: {
        type: Number, 
        required: true,
        immutable: true
    },
    serverId: {
        type: Number,
        required: true,
        immutable: true,
    },
    score: {
        type: Number,
        required: true,
    },
    inventory: [{
        type: itemSchema,
        required: true,
    }],
    ornamentsFound: [{
        type: ornamentSchema,
        required: true,
    }],
    coalCount: {
        type: Number,
        required: true,
        validator: (value) => value >= 0
    }
})

const Player = model('Player', playerSchema);
module.exports = { Player, playerSchema };