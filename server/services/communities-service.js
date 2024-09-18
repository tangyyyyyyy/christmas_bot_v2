const { createDatabaseEntry, validateRequiredFields } = require('../utils/helper-functions')
const { Community } = require('../schemas/community')

/**
 * Creates a community model and adds it the database
 * @param {Object} object an object containing fields for community
 * @param {Object.key -- Number -- required} serverId 
 * @param {Object.key -- Array[Ornaments]} foundOrnaments
 * @param {Object.key -- Array[Creature]} foundCreatures
 */
async function createCommunity({serverId, foundOrnaments, foundCreatures}) {
    validateRequiredFields({serverId}, 'community');
    
    let community = new Community({serverId, foundOrnaments, foundCreatures});
    
    if (community){
        await createDatabaseEntry(community);
    }
}

module.exports = { createCommunity }
// getCommunityTree()

// getCreatureDex()