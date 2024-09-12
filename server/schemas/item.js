const {Schema, model} = require('mongoose');

const itemSchema = new Schema({
    name: String
})

module.exports = model("Item", itemSchema)