const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://dbUser:Woo23IViADUOCm4J@cluster0-ekpvf.mongodb.net/test?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

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

/*async function uploadData(dbName, collectionName, data) {
    try {
        await client.connect();
        await createListing(dbName, collectionName, data)
        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}*/


/*
try {
    await client.connect();
    
} catch (e) {
    console.error(e);
} finally {
    await client.close();
}
*/
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

async function listDatabases() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        databasesList = await client.db().admin().listDatabases();
        console.log("Databases:");
        databasesList.databases.forEach(db => console.log(`-${db.name}`));
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

};

async function createListing(dbName, collectionName, newListing) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        const result = await client.db(dbName).collection(collectionName).insertOne(newListing);
        console.log(`New listing created with the following id: ${result.insertedId}`);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function createMultipleListings(dbName, collectionName, newListings) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        const result = await client.db(dbName).collection(collectionName).insertMany(newListings);

        console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
        console.log(result.insertedIds);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }


}

async function findOneListingByName(dbName, collectionName, nameOfListing) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        result = await client.db(dbName).collection(collectionName).findOne({ uname: nameOfListing });

        if (result) {
            console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
            console.log(result);
            return result;
        } else {
            console.log(`No listings found with the name '${nameOfListing}'`);
        }

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

}

async function updateListingByName(dbName, collectionName, nameOfListing, updatedListing) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        result = await client.db(dbName).collection(collectionName)
            .updateOne({ name: nameOfListing }, { $set: updatedListing });

        console.log(`${result.matchedCount} document(s) matched the query criteria.`);
        console.log(`${result.modifiedCount} document(s) was/were updated.`);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

}


async function upsertListingByName(dbName, collectionName, nameOfListing, updatedListing) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();

        result = await client.db(dbName).collection(collectionName)
            .updateOne({ name: nameOfListing },
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
    } finally {
        await client.close();
    }
}

async function deleteListingByName(dbName, collectionName, nameOfListing) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        result = await client.db(dbName).collection(collectionName).deleteOne({ name: nameOfListing });
        console.log(`${result.deletedCount} document(s) was/were deleted.`);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

}

module.exports={
    listDatabases,
    createListing,
    createMultipleListings,
    findOneListingByName,
    updateListingByName,
    upsertListingByName,
    deleteListingByName
}
