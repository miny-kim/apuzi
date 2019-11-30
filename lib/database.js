const { MongoClient } = require("mongodb");
//const uri = "mongodb+srv://dbUser:Woo23IViADUOCm4J@cluster0-ekpvf.mongodb.net/test?retryWrites=true&w=majority";
const uri="mongodb://localhost:27017";
const dbname="apuz";

async function listDatabases() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        databasesList = await client.db().admin().listDatabases();
        console.log("Databases:");
        databasesList.databases.forEach(db => console.log(`-${db.name}`));
    } catch (e) {
        console.error(e);
    } finally{
        await client.close();
    }

};

async function createListing(collectionName, newListing) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        var result = await client.db(dbName).collection(collectionName).insertOne(newListing);
        console.log(`New listing created with the following id: ${result.insertedId}`);
    } catch (e) {
        console.error(e);
    } finally{
        await client.close();
        return result.insertedId;
    }
}

async function createMultipleListings(collectionName, newListings) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        const result = await client.db(dbName).collection(collectionName).insertMany(newListings);

        console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
        console.log(result.insertedIds);
    } catch (e) {
        console.error(e);
    } finally{
        await client.close();
    }

}

async function findOneListing(collectionName, format) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        result = await client.db(dbName).collection(collectionName).findOne(format);
        if (result) {
            console.log(`Found a listing in the collection `);
            console.log(result);
            return result;
        } else {
            console.log(`No listings found`);
        }
    } catch (e) {
        console.error(e);
    } finally{
        await client.close();
    }
}

async function findMultipleListings({collectionName, format}) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        result = await client.db(dbName).collection(collectionName).find(format);
        if (result) {
            console.log(`Found listings in the collection `);
            console.log(result);
            return result;
        } else {
            console.log(`No listings found`);
        }
    } catch (e) {
        console.error(e);
    } finally{
        await client.close();
    }
}

async function updateListing(collectionName, format, updatedListing) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connet;
        result = await client.db(dbName).collection(collectionName)
            .updateOne(format, { $set: updatedListing });

        console.log(`${result.matchedCount} document(s) matched the query criteria.`);
        console.log(`${result.modifiedCount} document(s) was/were updated.`);
    } catch (e) {
        console.error(e);
    } finally{
        await client.close();
    }
}


async function upsertListing(collectionName, format, updatedListing) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();

        result = await client.db(dbName).collection(collectionName)
            .updateOne(format,
                { $set: updatedListing },
                { upsert: true });
        console.log(`${result.matchedCount} document(s) matched the query criteria.`);

        if (result.upsertedCount > 0) {
            console.log(`One document was inserted with the id ${result.upsertedId._id}`);
        } else {
            console.log(`${result.modifiedCount} document(s) was/were updated.`);
        }
    } catch (e) {
        console.error(e);
    } finally{
        await client.close();
    }
}

async function pushElementInListing(collectionName, format, element) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();

        result = await client.db(dbName).collection(collectionName)
            .updateOne(format,
                { $push: element },
                { upsert: true });
        console.log(`${result.matchedCount} document(s) matched the query criteria.`);

        if (result.upsertedCount > 0) {
            console.log(`One document was inserted with the id ${result.upsertedId._id}`);
        } else {
            console.log(`${result.modifiedCount} document(s) was/were updated.`);
        }
    } catch (e) {
        console.error(e);
    } finally{
        await client.close();
    }
}

async function deleteListing(collectionName, format) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        result = await client.db(dbName).collection(collectionName).deleteOne(format);
        console.log(`${result.deletedCount} document(s) was/were deleted.`);
    } catch (e) {
        console.error(e);
    } finally{
        await client.close();
    }

}

module.exports={
    uri,
    listDatabases,
    createListing,
    createMultipleListings,
    findOneListing,
    updateListing,
    upsertListing,
    deleteListing,
    pushElementInListing,
    findMultipleListings
}
