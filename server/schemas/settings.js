const { Schema, model } = require('mongoose');

const settingsSchema = new Schema({
    serverId: {
        type: Number, 
        required: true
    },
    timeout: { 
        type: Number, 
        default: 10000
    }
})

module.exports = model('Settings', settingsSchema);