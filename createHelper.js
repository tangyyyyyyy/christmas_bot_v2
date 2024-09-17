const { Item, itemSchema } = require('./server/schemas/item');

async function createItem(name, rarity, image) {

    const item = new Item({name, rarity, image})
    
    if (item) {
        await createObject(item);
        return item
    }

    return -1;
}


async function createObject(myObject) {
    try {
        await myObject.save()
        console.log(`Added ${myObject?.name} to the ${myObject.collection.collectionName} collection` || `Added object to the ${myObject.collection.collectionName} collection`);
    } catch(err) {
        console.log(`Failed to add object to the database`);
        console.log(err);
    }
 
    return
}

// async function getObjectValue(obj, ...args) {

//     obj.findOne(...args);

// }

module.exports = { createItem };