console.log("INITIALIZING CHRISTMAS BOT");
require("dotenv").config();


const Item = require('./server/schemas/item');
const {token, databaseToken} = process.env; 
const { connect } = require('mongoose');

const dbName = 'architekton0';

async function main() {

    console.log("The elves are getting to work...")
    await connect(databaseToken).catch(console.error);
    console.log("Christmas Bot Status: ONLINE");

    await createItem('Gumdrop Button');

}


async function createItem(name) {
    console.log(Item)
    const item = new Item({name: name })
    await item.save()
    console.log(`Added item: ${name}`)

}

main()