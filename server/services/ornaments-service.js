const { createDatabaseEntry, validateRequiredFields } = require('../utils/helper-functions')
const { Ornament } = require('../schemas/ornament')

/**
 * creates an ornament in the database
 * @param {Object} object an object containing fields for creature
 * @param {Object.key -- String -- required} name 
 * @param {Object.key -- Number -- required} rarity (usually passed in from constants/RARITY)
 * @param {Object.key -- Number -- required} serverId
 * @param {Object.key -- String} image URL
 * @param {Object.key -- Boolean} isFound
 * @param {Object.key -- Player} foundBy
 * @returns None
 */
async function createOrnament({name, rarity, serverId, image, isFound, foundBy}) {
    validateRequiredFields({name, rarity, serverId}, 'ornament');

    const ornament = new Ornament({name, rarity, image, serverId, isFound, foundBy})

    if (ornament){
        await createDatabaseEntry(ornament);
    }
}

module.exports = { createOrnament }