const { createDatabaseEntry, validateRequiredFields } = require('../utils/helper-functions')
const { Community } = require('../schemas/community')

/**
 * 
 * @param {Object} object an object containing fields for community
 * @param {Object.key -- Number} serverId 
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