const { Schema, model } = require('mongoose');
const { Item } = require('./item');

const ornamentSchema = new Schema({
    serverId: {
        type: Number, 
        required: true
    },
    isFound: { 
        type: Boolean, 
        default: false
    },
})

const Ornament = Item.discriminator('Ornament', ornamentSchema);
module.exports = { Ornament, ornamentSchema};