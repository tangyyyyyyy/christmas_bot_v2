import { Schema, model } from 'mongoose'
import { itemSchema } from './item.js'

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
    coalCount: {
        type: Number,
        required: true,
        validator: (value) => value >= 0
    }
})

const Player = model('Player', playerSchema);
export { Player, playerSchema };
