// Select the database "Tutorial"
use("Tutorial")

// Insert a docuemt with "_id": 1, with field "value": 999
db.getCollection("updateDocument").insert(
    {
        _id: 1,
        value: 999
    }
)   // if the collection already exist document with "_id": 1, then will update its "value" with 999

// Update the document in collection "updateDocument", whose "title" value is "old", with the new vlaue
db.getCollection("updateDocument").updateMany(
    // old content
    {
        title: "old"
    },
    // new content
    {
        $set: { title: "new" }
    }
)
//* alternative
/*
db.updateDocument.updateMany(
    // old content
    {
        title: "old"
    },
    // new content
    {
        $set: { title: "new" }
    }
)
*/

// You can use insert() for updating the content of document with specific "_id"
db.getCollection("updateDocument").insert(
    {
        _id: 1,
        info: "new content",
    }
)
