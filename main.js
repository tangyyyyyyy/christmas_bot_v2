console.log("INITIALIZING CHRISTMAS BOT");
require("dotenv").config();

const RARITY = {
    COMMON: 50,
    UNCOMMON: 30,
    RARE: 15,
    EPIC: 4.5,
    LEGENDARY: 0.5,
}

const { Item } = require('./server/schemas/item');
const { Ornament } = require('./server/schemas/ornament');
const { Player }= require('./server/schemas/player');
const { Creature }= require('./server/schemas/creature');
const { token, databaseToken } = process.env; 
const { connect, connection } = require('mongoose');

async function main() {

    console.log("The elves are getting to work...")
    await connect(databaseToken, {dbName: 'christmas_bot_v2'}).catch(console.error);
    console.log("Christmas Bot Status: ONLINE");

    // const myItem2 = await createItem('Gumdrop Button', RARITY.COMMON);
    // const myOrnament2 = await createOrnament('Gumdrop Ornament', RARITY.LEGENDARY, "", 123, false);
    // await createCreature("Grim Grimmler", "he", [myItem2, myOrnament2], "naughty", "" )

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

    return item;
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
    return ornament;
}

async function createPlayer(playerId, serverId, score, inventory, ornamentsFound, coalCount) {
    const player = new Player({playerId, serverId, score, inventory, ornamentsFound, coalCount})

    try {
        await player.save()
        console.log(`Player added, playerID: ${playerId}`)
    } catch(err) {
        console.log(`Failed to add player to the database`);
        console.log(err);
    }
    return player
}

async function createCreature(name, pronoun, items, nature, image) {
    const creature = new Creature({name, pronoun, items, nature, image})

    try {
        await creature.save()
        console.log(`Creature added, name: ${name}`)
    } catch(err) {
        console.log(`Failed to add creature to the database:`);
        console.log(err);
    }
    return creature
}

main();