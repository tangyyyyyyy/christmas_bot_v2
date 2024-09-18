const { createDatabaseEntry, validateRequiredFields } = require('../utils/helper-functions')
const { Settings } = require('../schemas/settings')

/**
 * Creates a settings model and adds it the database
 * @param {Object} object an object containing fields for settings
 * @param {Object.key -- Number -- required} serverId 
 * @returns none
 */
async function initializeSettings({serverId}){
    validateRequiredFields({serverId}, 'settings');

    const settings = new Settings({serverId});

    if(settings){
        await createDatabaseEntry(settings);
    }
}

module.exports = { initializeSettings }