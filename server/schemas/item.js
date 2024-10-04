import { Schema, model } from 'mongoose';

const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    rarity: {
      type: Number,
      required: true,
      validator: (value) => value >= 0 && value <= 100,
    },
    image: {
      type: String,
      default: '',
    },
  },
  { discriminatorKey: 'kind' },
);

const Item = model('Item', itemSchema);
export { Item, itemSchema };
