// helper functions if we ever need themconst { Item, itemSchema } = require('./server/schemas/item');

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

export { createObject }
