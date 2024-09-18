const assert = require('assert')

/**
 * HELPER FUNCTION: uploads an object to the database
 * @param {mongoose.Model} databaseEntry 
 * @returns 
 */
async function createDatabaseEntry(databaseEntry) {
    try {
        await databaseEntry.save()
        const successMessage = databaseEntry?.name ? `Added ${databaseEntry?.name} to the ${databaseEntry.collection.collectionName} collection` : `Added object to the ${databaseEntry.collection.collectionName} collection`;
        console.log(successMessage);
    } catch(err) {
        console.log(`Failed to add object to the database`);
        console.log(err);
    }
}

function validateRequiredFields(requiredFields, objectType){
    for (const key in requiredFields) {
        assert(requiredFields[key] !== undefined && requiredFields[key] !== null, `${key} is required to create the ${objectType} model`)
    }
}

module.exports = { createDatabaseEntry, validateRequiredFields }
