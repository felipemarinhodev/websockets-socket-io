import { MongoClient } from 'mongodb';

const client = new MongoClient("mongodb+srv://alura:iZBpNSzNGwMcbe1u@alura.7durtf7.mongodb.net/?retryWrites=true&w=majority");

export let documentsCollection;

try {
    await client.connect();
    const db = client.db("web-sockets");
    documentsCollection = db.collection("documents")
    console.log("Connected at the database with success!");
} catch (error) {
    console.log(error);
}