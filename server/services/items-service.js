import {
  createDatabaseEntry,
  validateRequiredFields,
} from '../utils/helper-functions.js'
import { Item } from '../schemas/item.js'

/**
 * creates an item in the database
 * @param {Object} object an object containing fields for items
 * @param {Object.key -- String} name
 * @param {Object.key -- Number} rarity (usually passed in from constants/RARITY)
 * @param {Object.key -- String} image URL
 * @returns None
 */
async function createItem({ name, rarity, image }) {
  validateRequiredFields({ name, rarity }, 'item');

  const item = new Item({ name, rarity, image });

  if (item) {
    await createDatabaseEntry(item);
  }
}

export { createItem };
