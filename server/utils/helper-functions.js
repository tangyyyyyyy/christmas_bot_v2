// helper functions if we ever need themconst { Item, itemSchema } = require('./server/schemas/item');

/**
 * HELPER FUNCTION: uploads an object to the database
 * @param {mongoose.Model} databaseEntry 
 * @returns 
 */
async function createDatabaseEntry(databaseEntry) {
    try {
        await databaseEntry.save()
        console.log(`Added ${databaseEntry?.name} to the ${databaseEntry.collection.collectionName} collection` || `Added object to the ${databaseEntry.collection.collectionName} collection`);
    } catch(err) {
        console.log(`Failed to add object to the database`);
        console.log(err);
    }
}

export { createDatabaseEntry }
