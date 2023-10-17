// Create a database called "Tutorial", or select the database "Tutorial" for below operation
use("Tutorial");
//* alternative
//use Tutorial;

// Insert documents into collection "insertDocument"
db.insertDocument.insertMany([
    {
        name: "A",
        info: 1
    },
    {
        name: "B",
        info: 2
    }
])