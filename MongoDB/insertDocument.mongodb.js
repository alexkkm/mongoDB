// Create a database called "Tutorial", or select the database "Tutorial" for below operation
use("Tutorial");
//* alternative
//use Tutorial;

// Insert documents into collection "insertDocument", with the already exist the 
db.getCollection("insertDocument").insertMany([
    // this item will be created with different "_id" but with same content of other fields
    {
        // if you didnt input "_id" field, then the value of "_id" will randomly generated on every time
        name: "A",
        info: 1
    },
    // this item already exists in the document, so no changes have made
    {
        _id: 1,
        name: "B",
        info: 2
    },
])
//* alternative
/*
db.insertDocument.insertMany([
    // this item will be created with different "_id" but with same content of other fields
    {
        // if you didnt input "_id" field, then the value of "_id" will randomly generated on every time
        name: "A",
        info: 1
    },
    // this item already exists in the document, so no changes have made
    {
        _id: 1,
        name: "B",
        info: 2
    },
    // item with same "_id" has already exist in the document, so this will update the content of that document
    {
        _id: 1,
        name: "C",
        info: 9999
    }
])
*/
