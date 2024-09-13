const { Schema, model } = require('mongoose');

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