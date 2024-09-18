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
const { Community } = require("./server/schemas/community");

const { createItem } = require("./createHelper")

async function main() {

    console.log("The elves are getting to work...")
    await connect(databaseToken, {dbName: 'christmas_bot_v2'}).catch(console.error);
    console.log("Christmas Bot Status: ONLINE");


    //TESTING: set to true if you want to purge databases
    let input = true
    if (input) {
        console.log("Deleting existing databases...");
        await connection.db.dropDatabase();
    }

    const myItem = await createItem('Gumdrop Button', RARITY.COMMON, `google.com`);

    const myOrnament = await createOrnament('Gumdrop Ornament', RARITY.LEGENDARY, "", 123);

    const myCreature = await createCreature("Grim Grimmler", "he", [myItem, myOrnament], "naughty", "" );
    const myPlayer = await createPlayer(123, 456, 1, [myItem], [myOrnament], 0);
    
    await console.log("Attemping to create community...")
    const myCommunity = await createCommunity(456, [myOrnament], [myCreature]);


    // console.log("FOUND ORNAMENTS: ", myCommunity);
   // console.log("FOUND BY PLAYER: ", myCommunity.foundOrnaments.get(myOrnament));

    await connection.close();
    console.log("Christmas Bot Status: OFFLINE");
}

// async function createItem(name, rarity, image) {
//     const item = new Item({name, rarity, image})

//     try {
//         await item.save()
//         console.log(`Added item: ${name}`)
//     } catch(err) {
//         console.log(`Failed to add item to the database`);
//         console.log(err);
//     }

//     return item;
// }

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

async function createCommunity(serverId, foundOrnaments, foundCreatures) {
    let community = new Community({serverId, foundOrnaments, foundCreatures})

    try {
        await community.save()
        
        console.log(`Community added, ID: ${serverId}`)
        console.log(`${serverId} has found ${community.foundOrnaments}! `)
        console.log(`${serverId} has found ${community.foundCreatures}! `)
    } catch(err) {
        console.log(`Failed to add creature to the database:`);
        console.log(err);
    }
    return community
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