// type '''node API.js''' in the terminal to use this file

const { MongoClient, ServerApiVersion } = require('mongodb');

// This is the uri for the mongoDB Database
const uri = "mongodb+srv://alexkong0222:alexkong0222@cluster0.qpf52os.mongodb.net/?retryWrites=true&w=majority";

console.log("Start of connection.js");

async function run() {
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    // Connect the client to the server	(optional starting in v4.7)
    try {
        await client.connect();
        console.log("Successfully connect to the mongoDB database.\n")
    } catch (err) {
        console.error(`Something went wrong on connection: ${err}\n`);
    }

    try {
        // Provide the name of the database and collection you want to use.
        // If the database and/or collection do not exist, the driver and Atlas
        // will create them automatically when you first write data.
        const dbName = "Test";
        const collectionName = "Testing";

        // Create references to the database and collection in order to run
        // operations on them.
        const database = client.db(dbName);
        const collection = database.collection(collectionName);

        //* Insert Documents *//

        // Create 2 documents, with field "_id" and "info"
        const buffer = [
            {
                _id: 1,
                info: "Hi",
                value: 40
            },
            {
                _id: 2,
                info: "Bye",
                value: 50
            },
        ];


        // Insert the documents into the collection 
        try {
            const insertManyResult = await collection.insertMany(buffer);
            console.log(`${insertManyResult.insertedCount} documents successfully inserted.\n`);
        } catch (err) {
            console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
        }

        //* Find Documents *//

        // Find all the documents in the collection that match with the "findQuery"
        const findQuery = { value: { $lt: 45 } };    // $lt: 45 (less than 45)
        /*  Expression of searching query
            $eq (equal to)
            $ne (not equal to)
            $in (in the group of)
            $nin (not in the group of)
            $gt (greater than)
            $gte (greater than or equal to)
            $lt (less than)
            $lte (less than or equal to)
        */

        // Display the searching result
        console.log("Searching result:");
        try {
            // find the documents match with "findQuery", and sort the result with "_id"
            const cursor = await collection.find(findQuery).sort({ _id: 1 });
            await cursor.forEach(doc => {
                console.log(`"_id: "${doc._id}: \n"info: "${doc.info}\n"value: "${doc.value}`); // display the matches documents
            });
            console.log();  // add a linebreak
        } catch (err) {
            console.error(`Something went wrong trying to find the documents: ${err}\n`);
        }

        // Find a single document that is the first document match with the "findOneQuery"
        const findOneQuery = { value: { $gt: 10 } };

        // Display the searching result
        console.log("Searching Result (Single Document):");
        try {
            const findOneResult = await collection.findOne(findOneQuery);
            if (findOneResult === null) {
                console.log(`Couldn't find any documents its "value" is greater than 10\n`);
            } else {
                console.log(`Found the first document match with "findOneQuery":\n${JSON.stringify(findOneResult)}\n`);
            }
        } catch (err) {
            console.error(`Something went wrong trying to find one document: ${err}\n`);
        }




    }
    finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);