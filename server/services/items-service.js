// createItem()

const { createObject } = require('../utils/helper-functions')
const { Item } = require('../schemas/item')

async function createItem(name, rarity, image) {

    const item = new Item({name, rarity, image})
    
    if (item) {
        await createObject(item);
        return item
    }

    return -1;
}

export { createItem }