const { Schema, model } = require('mongoose');
const Item = require('./item');
const Ornament = require('./ornament');

const playerSchema = new Schema({
    playerId: {
        type: Number, 
        required: true,
        immutable: true
    },
    serverId: {
        type: Number,
        required: true,
        immutable: true
    },
    score: {
        type: Number,
        required: true,
    },
    inventory: {
        type: [Item],
        required: true,
    },
    ornamentsFound: {
        type: [Ornament],
        required: true,
    },
    coalCount: {
        type: Number,
        required: true,
        validator: (value) => value >= 0
    }



    // _id: Schema.Types.ObjectId,
    // coalCount: { type: Number, required: true }, 
    // // inventory: { type: [itemSchema], required: true }, 
    // // ornamentsFound: { type: [ornamentSchema], required: true },
    // playerID: { type: Number, required: true },
    // serverID: { type: Number, required: true },
    // score: { type: Number, required: true },


})

module.exports = model("Player", playerSchema)

const { Schema, model } = require('mongoose');
const item = require('./item');

const itemSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    rarity: {
        type: Number, 
        required: true,
        validator: (value) => value >= 0 && value <=100,
    },
    image: {
        type: String,
        default: "",
    }
}, { discriminatorKey: 'kind'});

module.exports = model('Item', itemSchema)