const { Schema, model } = require('mongoose');

const settingsSchema = new Schema({
    serverId: {
        type: Number, 
        required: true,
        immutable: true,
    },
    timeout: { 
        type: Number, 
        default: 10000
    }
})

const Settings = model('Settings', settingsSchema);
module.exports = { Settings, settingsSchema };