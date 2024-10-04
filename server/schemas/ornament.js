import { Schema, model } from 'mongoose';
import { Item } from './item.js';
import { playerSchema } from './player.js';

const ornamentSchema = new Schema({
  serverId: {
    type: Number,
    required: true,
  },
  isFound: {
    type: Boolean,
    default: false,
  },
  foundBy: {
    type: playerSchema,
  },
});

const Ornament = Item.discriminator('Ornament', ornamentSchema);
export { Ornament, ornamentSchema };
