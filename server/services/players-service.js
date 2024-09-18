const {
  createDatabaseEntry,
  validateRequiredFields,
} = require('../utils/helper-functions');
const { Player } = require('../schemas/player');

/**
 * creates a player in the database
 * @param {Object} object an object containing fields for player
 * @param {Object.key -- Number -- required} playerId
 * @param {Object.key -- Number -- required} serverId
 * @param {Object.key -- Number -- required} score
 * @param {Object.key -- Array[Item] -- required} inventory
 * @param {Object.key -- Number -- required} coalCount
 * @returns None
 */
async function createPlayer({
  playerId,
  serverId,
  score,
  inventory,
  coalCount,
}) {
  validateRequiredFields(
    { playerId, serverId, score, inventory, coalCount },
    'player',
  );

  const player = new Player({
    playerId,
    serverId,
    score,
    inventory,
    coalCount,
  });

  if (player) {
    await createDatabaseEntry(player);
  }
  return player;
}

// updatePlayerAttributes() called when a player responds to a spawned creature (TODO: Rename this to something better)

// getPlayerInventory()

// getFoundOrnaments()

module.exports = { createPlayer };
