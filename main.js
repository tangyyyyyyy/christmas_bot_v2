console.log("INITIALIZING CHRISTMAS BOT");
require("dotenv").config();

const RARITY = {
    COMMON: 50,
    UNCOMMON: 30,
    RARE: 15,
    EPIC: 4.5,
    LEGENDARY: 0.5,
}

const Item = require('./server/schemas/item');
const Ornament = require('./server/schemas/ornament');
const Settings = require('./server/schemas/settings');
const { token, databaseToken } = process.env; 
const { connect, connection } = require('mongoose');

async function main() {

    console.log("The elves are getting to work...")
    await connect(databaseToken, {dbName: 'christmas_bot_v2'}).catch(console.error);
    console.log("Christmas Bot Status: ONLINE");

    // await createItem('Gumdrop Button', RARITY.COMMON);
    // await createOrnament('Gumdrop Ornament', RARITY.LEGENDARY, undefined, 123);
    // await initializeSettings(123);

    await connection.close();
    console.log("Christmas Bot Status: OFFLINE");
}

async function createItem(name, rarity, image) {
    const item = new Item({name, rarity, image})

    try {
        await item.save()
        console.log(`Added item: ${name}`)
    } catch(err) {
        console.log(`Failed to add item to the database`);
        console.log(err);
    }
    

}

async function createOrnament(name, rarity, image, serverId, isFound ) {
    const ornament = new Ornament({name, rarity, image, serverId, isFound})

    try {
        await ornament.save()
        console.log(`Added ornament: ${name}`)
    } catch(err) {
        console.log(`Failed to add ornament to the database`);
        console.log(err);
    }
    
}

async function initializeSettings(serverId){
    const settings = new Settings({serverId})

    try {
        await settings.save()
        console.log(`Initialized settings for ${serverId}`)
    } catch(err) {
        console.log(`Failed to initialize settings`);
        console.log(err);
    }
}

main();