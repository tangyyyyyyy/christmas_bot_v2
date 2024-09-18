const { createDatabaseEntry, validateRequiredFields } = require('../utils/helper-functions')
const { Player } = require('../schemas/player')

async function createPlayer({playerId, serverId, score, inventory, coalCount}) {
    validateRequiredFields({playerId, serverId, score, inventory, coalCount}, 'player');

    const player = new Player({playerId, serverId, score, inventory, coalCount})

    if (player) {
        await createDatabaseEntry(player);
    }
    return player
}

// updatePlayerAttributes() called when a player responds to a spawned creature (TODO: Rename this to something better)

// getPlayerInventory() 

// getFoundOrnaments() 

module.exports = { createPlayer }