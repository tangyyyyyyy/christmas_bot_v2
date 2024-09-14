const { Schema, model } = require('mongoose');
const { Item, itemSchema } = require('./item');

const creatureSchema = new Schema({
    name: {
        type: String, 
        required: true,
        unique: true
    },

    pronoun : {
        type: String,
        required: true
    },

    items: [{
            type: itemSchema,
            required: true,
    }],

    nature: {
        type: String, 
        required: true,
        validator: (value) => value in ["naughty", "nice"]
    },

    image: {
        type: String,
        default: "",
    }
})

const Creature = model('Creature', creatureSchema);
module.exports = { Creature, creatureSchema };