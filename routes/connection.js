var express = require('express');
var router = express.Router();

const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://dbUser:Woo23IViADUOCm4J@cluster0-ekpvf.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

/*try {
    await client.connect();
    await createListing(client, {
        name: "Lovely Loft",
        summary: "A charming loft in Paris",
        bedrooms: 1,
        bathrooms: 1
    })
    await listDatabases(client);
} catch (e) {
    console.error(e);
} finally {
    await client.close();
}*/

async function aaa(dbName,collectionName,data){
    try {
        await client.connect();
        await createListing(dbName,collectionName ,data)
        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

router.use(express.json());

router.post('/signUp',function(req,res){
    console.log(req.body);
    aaa("Users","normalUser",req.body);
});

/*async function main() {

    const { MongoClient } = require("mongodb");
    const uri = "mongodb+srv://dbUser:Woo23IViADUOCm4J@cluster0-ekpvf.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri,{useNewUrlParser:true,useUnifiedTopology:true});

    try {
        await client.connect();
        await createListing(client,{
            name: "Lovely Loft",
            summary: "A charming loft in Paris",
            bedrooms: 1,
            bathrooms: 1
        })
        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}*/

//main().catch(console.err);

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(`-${db.name}`));

};

async function createListing(dbName,collectionName, newListing) {
    const result = await client.db(dbName).collection(collectionName).insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

module.exports=router;