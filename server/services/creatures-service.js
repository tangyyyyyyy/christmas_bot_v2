const { createDatabaseEntry, validateRequiredFields } = require('../utils/helper-functions')
const { Creature } = require('../schemas/creature')

async function createCreature({name, pronoun, items, nature, image, isFound, foundBy}) {
    validateRequiredFields({name, pronoun, items}, 'creature');

    const creature = new Creature({name, pronoun, items, nature, image, isFound, foundBy})

    if(creature) {
        await createDatabaseEntry(creature);
    }
}

module.exports = { createCreature }