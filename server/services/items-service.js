const { createDatabaseEntry, validateRequiredFields } = require('../utils/helper-functions')
const { Item } = require('../schemas/item')

/**
 * creates an item in the database
 * @param {string} name 
 * @param {number} rarity (usually passed in from constants/RARITY)
 * @param {string} image 
 * @returns None
 */
async function createItem({name, rarity, image}) {
    validateRequiredFields({name, rarity}, 'item');

    const item = new Item({name, rarity, image})
    
    if (item) {
        await createDatabaseEntry(item);
    }
}

module.exports = { createItem }