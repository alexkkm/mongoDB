// Select the database "Test" to delete
use("Test");

// Delete the documents with the value "A" in field "status"
db.Testing.deleteMany({
    status: "A"
})
//* alternative
/* 
db.getCollection("Testing").deleteMany({
    status: "A"
})
*/

// Delete all the document in the collection of "Testing"
db.Testing.deleteMany({})
//* alternative
//db.getCollection("Testing").deleteMany({})