const { Schema } = require('mongoose');
const Item = require('./item');

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

module.exports = Item.discriminator('Ornament', ornamentSchema);