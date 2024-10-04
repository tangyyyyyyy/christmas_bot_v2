import { Schema, model } from 'mongoose'

const settingsSchema = new Schema({
  serverId: {
    type: Number,
    required: true,
    immutable: true,
  },
  timeout: {
    type: Number,
    default: 10000,
  },
});

const Settings = model('Settings', settingsSchema);
export { Settings, settingsSchema };
