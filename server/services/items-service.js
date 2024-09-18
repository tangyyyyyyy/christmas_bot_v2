// createItem()

const { createDatabaseEntry } = require('../utils/helper-functions')
const { Item } = require('../schemas/item')

/**
 * creates an item in the database
 * @param {string} name 
 * @param {number} rarity (usually passed in from constants/RARITY)
 * @param {string} image 
 * @returns None
 */
async function createItem(name, rarity, image) {

    const item = new Item({name, rarity, image})
    
    if (item) {
        await createDatabaseEntry(item);
    }
}

export { createItem }