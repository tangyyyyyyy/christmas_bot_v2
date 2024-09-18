const { createDatabaseEntry, validateRequiredFields } = require('../utils/helper-functions')
const { Creature } = require('../schemas/creature')

/**
 * Creates a creature model and adds it the database
 * @param {Object} object an object containing fields for creature
 * @param {Object.key -- String -- required} name
 * @param {Object.key -- String -- required} pronoun
 * @param {Object.key -- Array[Item] -- required} items
 * @param {Object.key -- String -- required} nature
 * @param {Object.key -- String} image URL for image
 * @param {Object.key -- Boolean} isFound
 * @param {Object.key -- foundBy} playerSchema
 * @returns none
 */
async function createCreature({name, pronoun, items, nature, image, isFound, foundBy}) {
    validateRequiredFields({name, pronoun, items, nature}, 'creature');

    const creature = new Creature({name, pronoun, items, nature, image, isFound, foundBy})

    if(creature) {
        await createDatabaseEntry(creature);
    }
}

module.exports = { createCreature }