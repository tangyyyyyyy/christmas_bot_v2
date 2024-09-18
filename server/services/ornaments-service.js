const { createDatabaseEntry, validateRequiredFields } = require('../utils/helper-functions')
const { Ornament } = require('../schemas/ornament')

async function createOrnament({name, rarity, image, serverId, isFound, foundBy}) {
    validateRequiredFields({name, rarity, serverId}, 'ornament');

    const ornament = new Ornament({name, rarity, image, serverId, isFound, foundBy})

    if (ornament){
        await createDatabaseEntry(ornament);
    }
}

module.exports = { createOrnament }