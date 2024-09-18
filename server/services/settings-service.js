const { createDatabaseEntry, validateRequiredFields } = require('../utils/helper-functions')
const { Settings } = require('../schemas/settings')

async function initializeSettings({serverId}){
    validateRequiredFields({serverId}, 'settings');

    const settings = new Settings({serverId});

    if(settings){
        await createDatabaseEntry(settings);
    }
}

module.exports = { initializeSettings }