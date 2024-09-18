const { Schema, model } = require('mongoose');
const { creatureSchema } = require('./creature');
const { ornamentSchema } = require('./ornament');

const communitySchema = new Schema({
    serverId: {
        type: Number, 
        required: true
    },
    foundOrnaments: [{
        type: Schema.Types.Mixed,
        default: []
    }],
    foundCreatures: [{
        type: creatureSchema,
        default: []
    }],
})
 
const Community = model('Community', communitySchema);
module.exports = { Community, communitySchema };