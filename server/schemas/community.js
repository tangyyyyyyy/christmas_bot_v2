import { Schema, model } from 'mongoose';
import { creatureSchema } from './creature.js';

const communitySchema = new Schema({
  serverId: {
    type: Number,
    required: true,
  },
  foundOrnaments: [
    {
      type: Schema.Types.Mixed,
      default: [],
    },
  ],
  foundCreatures: [
    {
      type: creatureSchema,
      default: [],
    },
  ],
});

const Community = model('Community', communitySchema);
export { Community, communitySchema };
