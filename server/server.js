//server dependancies
import 'dotenv/config';
const { token, databaseToken } = process.env;
import mongoose from 'mongoose';
const { connect, connection } = mongoose;

//utils imports
import { RARITY } from './utils/constants.js';

//services imports
import { createItem } from './services/items-service.js';
import { createOrnament } from './services/ornaments-service.js';
import { createPlayer } from './services/players-service.js';
import { createCreature } from './services/creatures-service.js';
import { createCommunity } from './services/communities-service.js';
import { initializeSettings } from './services/settings-service.js';

console.log('INITIALIZING CHRISTMAS BOT');

async function main() {
  console.log('The elves are getting to work...');
  await connect(databaseToken, { dbName: 'christmas_bot_v2' }).catch(
    console.error,
  );
  console.log('Christmas Bot Status: ONLINE');

  //TESTING: set to true if you want to purge databases
  let input = true;
  if (input) {
    console.log('Deleting existing databases...');
    await connection.db.dropDatabase();
  }

  // const myItem = await createItem({name: 'Gumdrop Button', rarity: RARITY.COMMON, image:`google.com`});
  // const myOrnament = await createOrnament({name: 'Gumdrop Ornament', rarity: RARITY.LEGENDARY, serverId: 123});
  // const myCreature = await createCreature({name: "Grim Grimmler", pronoun: "he", nature:"naughty"});
  // await initializeSettings({serverId: 123});
  // await createPlayer({playerId: 123, serverId: 456, score: 1, inventory: [], coalCount: 0});
  // await createCommunity({serverId: 456});

  await connection.close();
  console.log('Christmas Bot Status: OFFLINE');
}

main();
