const { createDatabaseEntry, validateRequiredFields } = require('../utils/helper-functions')
const { Community } = require('../schemas/community')

async function createCommunity({serverId, foundOrnaments, foundCreatures}) {
    validateRequiredFields({serverId}, 'community');
    
    let community = new Community({serverId, foundOrnaments, foundCreatures})
    
    if (community){
        await createDatabaseEntry(community);
    }
}

module.exports = { createCommunity }
// getCommunityTree()

// getCreatureDex()