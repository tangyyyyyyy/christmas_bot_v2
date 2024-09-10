const { Schema, model } = require('mongoose');
const playerSchema = new Schema({
    _id: Schema.Types.ObjectId,
    coalCount: { type: Number, required: true }, 
    // inventory: { type: [itemSchema], required: true }, 
    // ornamentsFound: { type: [ornamentSchema], required: true },
    playerID: { type: Number, required: true },
    serverID: { type: Number, required: true },
    score: { type: Number, required: true },
})

module.exports = model("Player", playerSchema)