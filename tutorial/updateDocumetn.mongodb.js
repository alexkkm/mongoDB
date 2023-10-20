// Select the database "Tutorial"
use("Tutorial")

// Insert a docuemt with "_id": 1, with field "title": "old"
db.getCollection("updateDocument").insertMany(
    {
        _id: 1,
        title: "old",
        matrix: { field1: 1, field2: 2 },
        trash: "gonna remove this field"
    }
)

//* Normal Update *//

// Update the document in collection "updateDocument", whose "title" value is "old", with the new value "new"
db.getCollection("updateDocument").updateMany(
    // searching query
    {
        title: "old"
    },
    // update (set the value of "title" by "new")
    {
        $set: { title: "new" }
    }
)
//* alternative
/*
db.updateDocument.updateMany(
     // searching query
    {
        title: "old"
    },
    // update (set the value of "title" by "new")
    {
        $set: { title: "new" }
    }
)
*/

//* Update with increment *//
db.getCollection("updateDocument").updateMany(
    // searching query
    {
        _id: 1,
    },
    // update (increase the value of "matrix.field1" by 1, decrease the value of "matrix.field2" by 2)
    {
        $inc: { "matrix.field1": 1, "matrix.field2": -2 }
    }
)

//* Rename the name of the fields *//
db.getCollection("updateDocument").updateMany(
    // searching query
    {
        _id: 1,
    },
    // update (rename the name of the field)
    {
        $rename: { "title": "info", "matrix": "metric" }
    }
)

//* Delete a particular field *//
db.getCollection("updateDocument").updateMany(
    // searching query
    {
        _id: 1,
    },
    // update (remove the "trash" field)
    {
        $unset: { "trash": "" }
    }
)