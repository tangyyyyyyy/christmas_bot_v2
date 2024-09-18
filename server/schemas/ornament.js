const { Schema, model } = require('mongoose');
const { Item } = require('./item');
const { playerSchema } = require('./player') 

const ornamentSchema = new Schema({
    serverId: {
        type: Number, 
        required: true
    },
    isFound: { 
        type: Boolean, 
        default: false
    },
    foundBy: {
        type: playerSchema,
    }
})

const Ornament = Item.discriminator('Ornament', ornamentSchema);
module.exports = { Ornament, ornamentSchema };
