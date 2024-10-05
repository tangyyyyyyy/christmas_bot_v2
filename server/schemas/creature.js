import { Schema, model } from 'mongoose';
import { itemSchema } from './item.js';
import { playerSchema } from './player.js';

const creatureSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  pronoun: {
    type: String,
    required: true,
  },
  items: [
    {
      type: itemSchema,
      required: true,
    },
  ],
  nature: {
    type: String,
    required: true,
    validator: (value) => value in ['naughty', 'nice'],
  },
  image: {
    type: String,
    default: '',
  },
  isFound: {
    type: Boolean,
    default: false,
  },
  foundBy: {
    type: playerSchema,
  },
});

const Creature = model('Creature', creatureSchema);
export { Creature, creatureSchema };
