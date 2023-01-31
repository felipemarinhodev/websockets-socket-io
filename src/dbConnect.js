import * as dotenv from 'dotenv'
dotenv.config();
import { MongoClient } from 'mongodb';

const SECRET_MONGO = process.env.ALURA_SECRET_MONGO || 'PW'
console.log("Secret mongo", SECRET_MONGO);

const client = new MongoClient(`mongodb+srv://alura:${SECRET_MONGO}@alura.7durtf7.mongodb.net/?retryWrites=true&w=majority`);

export let documentsCollection;

try {
    await client.connect();
    const db = client.db("web-sockets");
    documentsCollection = db.collection("documents")
    console.log("Connected at the database with success!");
} catch (error) {
    console.log(error);
}